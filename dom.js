let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
let items=document.getElementsByClassName('list-group-item');
for (let i=0; i<items.length; i++){
    items[i].style.backgroundColor = "#f4f4f4";
    items[i].style.fontWeight= "bold";
}
items[2].style.backgroundColor= "green";
let newitem=document.getElementsByClassName('newitem');
newitem[0].style.fontWeight = "bold";
let tagitem=document.getElementsByTagName('li');
tagitem[4].style.border = 'solid 4px #000';