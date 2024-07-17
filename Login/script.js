document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Fetch username (email/enrollment number) and password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Here you can add your login logic, e.g., send a request to your server for authentication

  // For demonstration purposes, let's just log the username and password
  console.log('Username:', username);
  console.log('Password:', password);

  // After successful validation, redirect to the home page
  window.location.href = '../Home/home.html'; // Replace 'home.html' with the path to your home page
});
