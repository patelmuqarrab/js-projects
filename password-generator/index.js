let container = document.getElementById("container");
let button = document.querySelector("button");

function generatePassword(
    obj,
    color,
    symbols,
    seasons,
    days,
    months,
    numbers,
    software
) {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const selectedElements = [
        obj[Math.floor(Math.random() * obj.length)],
        color[Math.floor(Math.random() * color.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        seasons[Math.floor(Math.random() * seasons.length)],
        days[Math.floor(Math.random() * days.length)],
        months[Math.floor(Math.random() * months.length)],
        numbers[Math.floor(Math.random() * numbers.length)],
        software[Math.floor(Math.random() * software.length)],
    ];
    const shuffledElements = shuffleArray(selectedElements);

    return shuffledElements.join("");
}

button.addEventListener("click", () => {
    let password = generatePassword(
        obj,
        color,
        symbols,
        seasons,
        days,
        months,
        numbers,
        software
    );
    container.innerHTML = password.slice(0, 17);
});

const obj = [
    "Chair",
    "Lamp",
    "Book",
    "Candle",
    "Guitar",
    "Keyboard",
    "Blanket",
    "Coffee mug",
    "Plant",
    "Headphones",
    "Scissors",
    "Camera",
    "Pillow",
    "Backpack",
    "Basket",
    "Clock",
    "Mirror",
    "Rug",
    "Painting",
    "Table",
    "Television",
    "Vase",
    "Remote control",
    "Sunglasses",
    "Wallet",
    "Shoes",
    "Coat",
    "Hat",
    "Globe",
    "Calculator",
    "Speaker",
    "Towel",
    "Toothbrush",
    "Soap",
    "Mouse",
    "Keyboard",
    "Phone",
    "Charger",
    "Notebook",
    "Pen",
];

const color = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Pink",
    "Brown",
    "Black",
    "White",
    "Gray",
    "Beige",
    "Teal",
    "Turquoise",
    "Magenta",
    "Cyan",
    "Lavender",
    "Maroon",
    "Navy",
    "Indigo",
    "Olive",
    "Salmon",
    "Crimson",
    "Violet",
    "Lime",
    "Slate",
    "Gold",
    "Silver",
    "Ruby",
    "Pearl",
    "Amber",
    "Emerald",
    "Sapphire",
    "Topaz",
    "Opal",
    "Peridot",
    "Aquamarine",
    "Rose",
];

const symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "|",
    "\\",
    ";",
    ":",
    "'",
    '"',
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
    "`",
    "~",
];

const seasons = ["Spring", "Summer", "Autumn", "Winter"];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const software = [
    "Mail",
    "Maps",
    "Drive",
    "Docs",
    "Slides",
    "Sheets",
    "Forms",
    "Studio",
    "Prime",
    "Tesla",
    "Docs",
    "Wattpad",
    "Robinhood",
    "Puffin",
    "Brave",
    "Opera",
    "Zoom",
    "Slack",
    "Skype",
    "Edge",
    "Chrome",
    "Trello",
    "Evernote",
    "Spotify",
    "Netflix",
    "Canva",
    "Excel",
    "Peak",
    "Dropbox",
    "Notion",
    "Cash",
    "Mint",
    "Uber",
    "Lyft",
    "Kindle",
];
