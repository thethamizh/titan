
// let form=document.getElementById('userform');
// form.addEventListener('submit', ls);
// function ls(e){
//     let name=document.getElementById('name').value;
//     let email=document.getElementById('email').value;
//     localStorage.setItem('Name',name);
//     localStorage.setItem('Email',email);
// }
let form = document.getElementById('userform');
form.addEventListener('submit', ls); // Corrected the method name to "addEventListener"

function ls(e) {
  e.preventDefault();
  console.log('hi');
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let userDetailsString = "Name: " + name + ", Email: " + email;
  localStorage.setItem('UserDetails', userDetailsString);
  form.reset();
  location.reload();
}
