let form = document.getElementById('addForm');
let itemlist = document.getElementById('items');

// form submit event
form.addEventListener('submit', additem);
itemlist.addEventListener('click', removeItem);

function additem(e){
    e.preventDefault();
    let newitem=document.getElementById('item').value;
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem));
    let dbtn=document.createElement('button');
    let ebtn=document.createElement('button');
    dbtn.className='btn btn-danger btn-sm float-right delete';
    ebtn.className='btn btn-primary btn-sm float-right edit';
    dbtn.appendChild(document.createTextNode('X'));
    ebtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(dbtn);
    li.appendChild(ebtn);
    itemlist.appendChild(li);
}   
// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Do you want to this Item ?')){
        var li = e.target.parentElement;
        itemlist.removeChild(li);
      }
    }
  }
  