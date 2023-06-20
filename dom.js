let form = document.getElementById('addForm');
let itemlist = document.getElementById('items');
var filter = document.getElementById('filter');
// form submit event
form.addEventListener('submit', additem);
itemlist.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function additem(e){
    e.preventDefault();
    let newitem=document.getElementById('item').value;
    let des=document.getElementById('des').value;

    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(des));

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
  function filterItems() {
    var input = document.getElementById('filter');
  var filter = input.value.toUpperCase();
    var itemList = document.getElementById('items');
    var items = itemList.getElementsByTagName('li');
  
    // Loop through all list items
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var text = item.textContent || item.innerText;
  
      // Check if the item matches the search string
      if (text.toUpperCase().indexOf(filter) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    }
  }
  
