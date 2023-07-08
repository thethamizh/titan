// Get user details when the DOM has loaded
document.addEventListener('DOMContentLoaded', getUserDetails);

function getUserDetails() {
  axios.get("https://crudcrud.com/api/52352e34e4a842039fce3e85553c8834/apdata")
    .then((res) => {
      // Retrieve the saved user details
      let userDetails = res.data;

      // Display the user details on the website
      let userDetailsContainer = document.getElementById('userform');

      userDetails.forEach((user) => {
        let newli = document.createElement('li');
        newli.textContent = user.name + ' - ' + user.email;

        let ebtn = document.createElement('input');
        ebtn.type = 'button';
        ebtn.value = 'Edit';
        ebtn.onclick = () => {
          userDetailsContainer.removeChild(newli);
          document.getElementById('name').value = user.name;
          document.getElementById('email').value = user.email;
        };

        let dbtn = document.createElement('input');
        dbtn.type = 'button';
        dbtn.value = 'Delete';
        dbtn.onclick = () => {
          userDetailsContainer.removeChild(newli);
        };

        newli.appendChild(ebtn);
        newli.appendChild(dbtn);
        userDetailsContainer.appendChild(newli);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

// Save user details when the form is submitted
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
    name,
    email
  };

  axios.post("https://crudcrud.com/api/52352e34e4a842039fce3e85553c8834/apdata", userDetails)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  let userDetailsContainer = document.getElementById('userform');
  let newli = document.createElement('li');
  newli.textContent = userDetails.name + ' - ' + userDetails.email;

  let ebtn = document.createElement('input');
  ebtn.type = 'button';
  ebtn.value = 'Edit';
  ebtn.onclick = () => {
    userDetailsContainer.removeChild(newli);
    document.getElementById('name').value = userDetails.name;
    document.getElementById('email').value = userDetails.email;
  };

  let dbtn = document.createElement('input');
  dbtn.type = 'button';
  dbtn.value = 'Delete';
  dbtn.onclick = () => {
    userDetailsContainer.removeChild(newli);
  };

  newli.appendChild(ebtn);
  newli.appendChild(dbtn);
  userDetailsContainer.appendChild(newli);

  // Reset the form fields
  form.reset();
}
