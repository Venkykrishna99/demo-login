document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Both username and password are required.');
    return;
  }

  // Simulate form submission, replace this with real backend API call
  alert('Logging in...');
});
