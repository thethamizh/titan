// // let header = document.getElementById('main-header');
// // header.style.borderBottom = 'solid 3px #000';
// // let items=document.getElementsByClassName('list-group-item');
// // for (let i=0; i<items.length; i++){
// //     items[i].style.backgroundColor = "#f4f4f4";
// //     items[i].style.fontWeight= "bold";
// // }
// // items[2].style.backgroundColor= "green";
// // let newitem=document.getElementsByClassName('newitem');
// // newitem[0].style.fontWeight = "bold";
// // let tagitem=document.getElementsByTagName('li');
// // tagitem[4].style.border = 'solid 4px #000';

// // QuerySelector //
// let bolditem = document.querySelectorAll('.list-group-item');
// for (i=0; i<bolditem.length; i++){
//     bolditem[i].style.fontWeight='bold';
// }
// bolditem[1].style.backgroundColor='green';
// bolditem[2].style.display='None';

// parentElement
let itemslist=document.querySelector('#items');
console.log(itemslist.parentNode);
itemslist.parentNode.style.backgroundColor="grey";

// lastelementchild
console.log(itemslist.lastElementChild);
itemslist.lastElementChild.style.fontWeight='bold'
// lastchild
console.log(itemslist.lastChild);
// firstelementchild
console.log(itemslist.firstElementChild);
itemslist.firstElementChild.style.fontWeight='bold'

// firstchild
console.log(itemslist.firstChild);

// nextsibling
console.log(itemslist.nextSibling);

// nextelementsibling
console.log(itemslist.nextElementSibling);

// previoussibling
console.log(itemslist.previousSibling);

// previouselementsibling
console.log(itemslist.previousElementSibling);
itemslist.previousElementSibling.textContent='New Items'


// createelement
let newdiv=document.createElement('div');
newdiv.className='newdiv';

// setAttribute
newdiv.setAttribute('title','newdiv');
// createtesxtnode
let newtext=document.createTextNode('Hello');

// appendchild
newdiv.appendChild(newtext);
console.log(newdiv);

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
container.insertBefore(newdiv,h1);
let container1=document.querySelector('.list-group');
let h2=document.querySelector('li:first-child');
container1.insertBefore(newdiv,h2);
