// Get user details when the DOM has loaded
document.addEventListener('DOMContentLoaded', getUserDetails);

function getUserDetails() {
  axios.get("https://crudcrud.com/api/d1dd5724efe046fbbdacba95064f8fd9/apdata")
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
          deleteUser(user._id);
        };

        let ebtn = document.createElement('input');
        ebtn.type = 'button';
        ebtn.value = 'Edit';
        ebtn.onclick = () => {
          userDetailsContainer.removeChild(newli);
          document.getElementById('name').value = user.name;
          document.getElementById('email').value = user.email;
          saveBtn.onclick = () => {
            updateUser(user._id, newli);
          };
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
function deleteUser(userId) {
  axios.delete(`https://crudcrud.com/api/d1dd5724efe046fbbdacba95064f8fd9/apdata/${userId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Update user details
function updateUser(userId, listItem) {
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');

  let updatedName = nameInput.value;
  let updatedEmail = emailInput.value;

  let updatedUserDetails = {
    name: updatedName,
    email: updatedEmail
  };

  axios.put(`https://crudcrud.com/api/d1dd5724efe046fbbdacba95064f8fd9/apdata/${userId}`, updatedUserDetails)
    .then((res) => {
      console.log(res);
      listItem.textContent = updatedName + ' - ' + updatedEmail;
      nameInput.value = '';
      emailInput.value = '';
      saveBtn.onclick = saveUserDetails;
    })
    .catch((err) => {
      console.error(err);
    });
}

// Save user details when the form is submitted
let form = document.getElementById('userform');
let saveBtn = document.getElementById('saveBtn');
form.addEventListener('submit', saveUserDetails);

function saveUserDetails(event) {
  event.preventDefault();

  // Get the user details from the form
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');

  let name = nameInput.value;
  let email = emailInput.value;

  // Check if name and email fields are empty
  if (!name || !email) {
    alert('Please enter both name and email');
    return;
  }

  // Get the list of user details
  let userDetailsList = document.getElementById('userform').querySelectorAll('li');

  // Find the existing user detail to update
  let existingUser = null;
  userDetailsList.forEach((user) => {
    let userText = user.textContent;
    if (userText.includes(name) && userText.includes(email)) {
      existingUser = user;
    }
  });

  // If existing user found, update the details
  if (existingUser) {
    let userId = existingUser.dataset.userId;
    updateUser(userId, existingUser);
  } else {
    // Create a new user detail
    let userDetails = {
      name,
      email
    };

    axios.post("https://crudcrud.com/api/d1dd5724efe046fbbdacba95064f8fd9/apdata", userDetails)
      .then((res) => {
        console.log(res);
        let userDetailsContainer = document.getElementById('userform');
        let newli = document.createElement('li');
        newli.textContent = userDetails.name + ' - ' + userDetails.email;
        newli.dataset.userId = res.data._id;

        let deleteIcon = document.createElement('input');
        deleteIcon.type = 'button';
        deleteIcon.value = 'Delete';
        deleteIcon.onclick = () => {
          userDetailsContainer.removeChild(newli);
          deleteUser(res.data._id);
        };

        let ebtn = document.createElement('input');
        ebtn.type = 'button';
        ebtn.value = 'Edit';
        ebtn.onclick = () => {
          userDetailsContainer.removeChild(newli);
          document.getElementById('name').value = userDetails.name;
          document.getElementById('email').value = userDetails.email;
          saveBtn.onclick = () => {
            updateUser(res.data._id, newli);
          };
        };

        newli.appendChild(deleteIcon);
        newli.appendChild(ebtn);
        userDetailsContainer.appendChild(newli);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Reset the form fields
  form.reset();
}
