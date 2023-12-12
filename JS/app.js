// functions
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function makeElAndAddClass(el, className) {
  let element = document.createElement(el);
  if (className) element.classList.add(className);
  return element;
}
function produceElement(callback, el, className, numEl) {
  let el_arr = [];
  for (let i = 1; i < numEl; i++) {
    let el_me = callback(el, className);
    let color = getRandomColor();
    el_me.style.backgroundColor = color;
    el_me.textContent = color;
    el_arr.push(el_me);
  }
  return el_arr;
}

const CONTAINER = makeElAndAddClass("div", "container");
const BODY = document.querySelector('body');
const color_container = produceElement(
  makeElAndAddClass,
  "div",
  "color-container",
  30
);
CONTAINER.append(...color_container);
BODY.appendChild(CONTAINER);

console.log(CONTAINER);