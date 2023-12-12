const CONTAINER = document.createElement('div');
CONTAINER.setAttribute('class','container');

function getElement(element){

    return document.querySelector(element);

}
console.log(getElement('body'));