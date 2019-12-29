const minEmailLength = 5;
const validPassword = /\w{6,}/;
let profiles = [
  {
    email: 'user@gmail.com',
    password: 'UserPass'
  },
  {
    email: 'admin@gmail.com',
    password: 'AdminPass'
  }
];
let account, password, newPassword, confirmPassword;
let email = prompt('Your email:');
if (!email) {
  alert('Canceled.');
} else if (email.trim().length < minEmailLength) {
  alert('I don\'t know any emails having name length less than 5 symbols.');
  email = false;  
} else {
  for (let profile of profiles) {
    if (email.toLocaleLowerCase() === profile.email) {
      account = profile;
    }
  }
}
if (account) {
  password = prompt('Your password:');
  if (!password) {
    alert('Canceled.');
  } else if (password !== account.password) {
    alert('Wrong password.');
  } else if (password === account.password) {
    if (confirm('Do you want to change your password?')) {
      password = prompt('Your old password:');
      if (!password) {
        alert('Canceled.');
      } else if (password !== account.password) {
        alert('Wrong password.');
      } else if (password === account.password) {
        newPassword = prompt('New password:');
        if (!newPassword) {
          alert('Canceled.')
        } else if (validPassword.test(newPassword)) {
          confirmPassword = prompt('Confirm password:');
          if (confirmPassword === newPassword) {
            account.password = confirmPassword;
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        } else {
          alert('It\'s too short password. Sorry.');
        }
      }
    } else {
      alert('You have failed the change.');
    }
  }
} else if (email) {
  alert('I don\'t know you');
}