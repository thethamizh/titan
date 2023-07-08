// Get user details when the DOM has loaded
document.addEventListener('DOMContentLoaded', getUserDetails);

function getUserDetails() {
  axios.get("https://crudcrud.com/api/ecc4e609d30d4c68851b8a9d60590fdc/apdata")
    .then((res) => {
      // Retrieve the saved user details
      let userDetails = res.data;

      // Display the user details on the website
      let userDetailsContainer = document.getElementById('userform');

      userDetails.forEach((user) => {
        let newli = document.createElement('li');
        newli.textContent = user.name + ' - ' + user.email;

        let deleteIcon = document.createElement('input');
        deleteIcon.type = 'button';
        deleteIcon.value = 'Delete';
        deleteIcon.onclick = () => {
          userDetailsContainer.removeChild(newli);
          deleteUser(user._id, newli); // Use user._id instead of res.data._id
        };

        let ebtn = document.createElement('input');
        ebtn.type = 'button';
        ebtn.value = 'Edit';
        ebtn.onclick = () => {
          userDetailsContainer.removeChild(newli);
          document.getElementById('name').value = user.name;
          document.getElementById('email').value = user.email;
        };

        newli.appendChild(deleteIcon);
        newli.appendChild(ebtn);
        userDetailsContainer.appendChild(newli);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

// Delete user details
function deleteUser(userId, listItem) {
  axios.delete(`https://crudcrud.com/api/ecc4e609d30d4c68851b8a9d60590fdc/apdata/${userId}`) // Add forward slash before userId
    .then((res) => {
      console.log(res);
      listItem.remove();
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

  axios.post("https://crudcrud.com/api/ecc4e609d30d4c68851b8a9d60590fdc/apdata", userDetails)
    .then((res) => {
      console.log(res);
      let userDetailsContainer = document.getElementById('userform');
      let newli = document.createElement('li');
      newli.textContent = userDetails.name + ' - ' + userDetails.email;

      let deleteIcon = document.createElement('input');
      deleteIcon.type = 'button';
      deleteIcon.value = 'Delete';
      deleteIcon.onclick = () => {
        userDetailsContainer.removeChild(newli);
        deleteUser(res.data._id, newli);
      };

      let ebtn = document.createElement('input');
      ebtn.type = 'button';
      ebtn.value = 'Edit';
      ebtn.onclick = () => {
        userDetailsContainer.removeChild(newli);
        document.getElementById('name').value = userDetails.name;
        document.getElementById('email').value = userDetails.email;
      };

      newli.appendChild(deleteIcon);
      newli.appendChild(ebtn);
      userDetailsContainer.appendChild(newli);
    })
    .catch((err) => {
      console.error(err);
    });

  // Reset the form fields
  form.reset();
}
