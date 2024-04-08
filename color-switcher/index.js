let select0 = Math.floor(Math.random() * (14 - 1 + 1));
let select1 = Math.floor(Math.random() * (14 - 1 + 1));
let select2 = Math.floor(Math.random() * (14 - 1 + 1));
let select3 = Math.floor(Math.random() * (14 - 1 + 1));

let box0 = document.getElementById("box0");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

let btn = document.getElementById("btn");

let colors = {
  1: "bg-black-600",
  2: "bg-orange-600",
  3: "bg-gray-600",
  4: "bg-amber-600",
  5: "bg-purple-600",
  6: "bg-red-600",
  7: "bg-fuchsia-600",
  8: "bg-green-600",
  9: "bg-lime-600",
  10: "bg-yellow-600",
  11: "bg-blue-600",
  12: "bg-green-600",
  13: "bg-rose-600",
  14: "bg-teal-600",
};

function colorSwitch() {
  let select0 = Math.floor(Math.random() * (14 - 1 + 1));
  let select1 = Math.floor(Math.random() * (14 - 1 + 1));
  let select2 = Math.floor(Math.random() * (14 - 1 + 1));
  let select3 = Math.floor(Math.random() * (14 - 1 + 1));

  console.log(`${select0} ${select1} ${select2} ${select3}`);
  
  const list0 = box0.classList.toggle(colors[select0]);
  const list1 = box1.classList.toggle(colors[select1]);
  const list2 = box2.classList.toggle(colors[select2]);
  const list3 = box3.classList.toggle(colors[select3]);
}

btn.addEventListener("click",colorSwitch)
