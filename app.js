// javascript DOM 

//const container=document.querySelector('div');
//console.log(container);

//const list= document.getElementsByTagName('li');
//console.log(list);

//const classi=document.getElementsByClassName('list-items');
//console.log(classi);

//const idset= document.getElementById('main-heading');
//console.log(idset);

// css DOM

//const title =document.querySelector('#main-heading');

//title.style.color='red';

//console.log(title);

// list items 

//const listitems= document.querySelectorAll('.list-items');
//for(i=0;i<listitems.length;i++)
//{
//    listitems[i].style.fontSize='1rem';
//}

// Creating Elements

//const ul=document.querySelector('ul');
//const li=document.querySelector('li');

//Adding Elements
//ul.append(li);

//Modifying the text

//li.innerText='X-men';

// modifying Attributes & Classes

//li.setAttribute('id', 'main-heading');

// class
//li.classList.remove('list-items')
//console.log(li.classList.contains('list-items'));

// remove elements
//li.remove();


// Traverse the DOM


// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
// const html=document.documentElement;
//
//
//console.log(html.parentNode);
//console.log(html.parentElement);
// Child Node Traversal

//let ul=document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor='blue';
//console.log(ul.children);
// Sibling Node Traversal

let ul1=document.querySelector('ul');
const div1=document.querySelector('div');
console.log(div1.childNodes);

console.log(ul1.previousElementSibling);
console.log(ul1.nextSibling);

// Event Listeners

