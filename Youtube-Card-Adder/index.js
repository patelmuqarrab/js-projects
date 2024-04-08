
function createCard(title,channel,views,months,thumblink){
    if(views > 1000 && views < 1000000){
      views = views/1000 + 'K';
    }else if(views > 1000000){
      views = views/1000000 + 'M';
    }
  
    let html = `
    <div class="card w-9/12	 bg-zinc-800 flex p-3 mt-5">
    <img class="mr-4 h-[150px] w-[250px]" src="${thumblink}" alt="">
  
  <div class="text text-white flex flex-col">
    <h2 class="title text-2xl mb-2">${title}</h2>
    <p class="details text-neutral-300 flex">${channel} &#x2022; ${views} views &#x2022; ${months} months ago</p>
  </div>
  </div>`
  
  document.querySelector("body").innerHTML += html
  
  }
  
  