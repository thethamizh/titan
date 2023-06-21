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
    name: name,
    email: email
  };

  // Store the user details in local storage with the name as the key
  localStorage.setItem(email, JSON.stringify(userDetails));

  // Reset the form fields
  form.reset();
}
