let form = document.getElementById('userform');
form.addEventListener('submit', saveUserDetails);

function saveUserDetails(event) {
  event.preventDefault();

  // Get the user details from the form
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');

  let name = nameInput.value;
  let email = emailInput.value;

  // Create an object to hold the user details
  let userDetails = {
     name, email
  };

  // Store the user details in local storage with the name as the key
  localStorage.setItem(email, JSON.stringify(userDetails));
  let userDetailsContainer = document.getElementById('userform');
  let newli = document.createElement('li');
  newli.textContent = userDetails.name + ' - ' + userDetails.email;
  let ebtn=document.createElement('input');
  ebtn.type='button';
  ebtn.value='Edit';
  ebtn.onclick = () => {
    localStorage.removeItem(userDetails.email)
    userDetailsContainer.removeChild(newli);
    document.getElementById('name').value = userDetails.name;
    document.getElementById('email').value = userDetails.email;
  }
  let dbtn=document.createElement('input');
  dbtn.type='button';
  dbtn.value='Delete';
  dbtn.onclick = () => {
    localStorage.removeItem(userDetails.email)
    userDetailsContainer.removeChild(newli);
  }
  newli.appendChild(ebtn);
  newli.appendChild(dbtn);
  userDetailsContainer.appendChild(newli);

  // Reset the form fields
  form.reset();
  
}