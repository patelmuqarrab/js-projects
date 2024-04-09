document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.searchBox');
    const input = form.querySelector('.input');
    const container = document.querySelector('.results');
    const count = document.querySelector('.resultsCount');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const search = input.value;
        if (search) {
            wikiSearch(search);
        }
    });

    function wikiSearch(search) {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=100&srsearch=${encodeURIComponent(search)}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                createResults(data.query.search);
            })
            .catch(error => alert('Error : ' + error));
    }

    function createResults(results) {
        container.innerHTML = '';
        count.textContent = `Results Count : ${results.length}`;
        results.forEach(result => {
            const element = document.createElement('div');
            element.className = 'result';
            element.classList.add("w-full", "p-3", "my-10", "bg-[#FBF5F3]")
            element.innerHTML = `
                <h3 class="text-xl font-bold mb-2">${result.title}</h3>
                <p class="mb-2">${result.snippet}</p>
                <a class="inline-block items-center text-white text-center bg-[#00120B] text-lg font-bold p-2 w-full" href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">Read More</a>
            `;
            container.appendChild(element);
        });
    }
});