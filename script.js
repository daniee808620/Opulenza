const registerForm = document.getElementById('registerForm');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const errorBox = document.getElementById('errorBox');
const successBox = document.getElementById('successBox');
const loading = document.getElementById('loading');
const progressFill = document.getElementById('progressFill');

// Function to simulate the progress bar animation
function simulateProgressBar() {
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      progressFill.style.width = `${width}%`;
      progressFill.textContent = `${width}%`;
    }
  }, 50);
}

// Handle form submission
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Show loading and simulate progress
  loading.style.display = 'block';
  simulateProgressBar();

  // Get user inputs
  const email = emailInput.value;
  const phone = phoneInput.value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const referral = document.getElementById('referral').value;

  // Simulate checking if email or phone exists
  setTimeout(() => {
    const existingUsers = JSON.parse(localStorage.getItem('OpulenzaUsers')) || [];

    // Check if email or phone already exists
    const userExists = existingUsers.find(user => user.email === email || user.phone === phone);

    if (userExists) {
      // Show error
      errorBox.style.display = 'block';
      errorBox.textContent = 'Email or Phone number already exists.';
      loading.style.display = 'none';
      setTimeout(() => {
        window.location.reload();
      }, 1000); // Reload the page after 1 second
    } else {
      // Proceed with successful registration
      setTimeout(() => {
        successBox.style.display = 'block';
        successBox.textContent = 'Registration Successful! Proceed to login.';
        loading.style.display = 'none';

        // Save user details to localStorage
        existingUsers.push({ username, email, phone, referral, password });
        localStorage.setItem('OpulenzaUsers', JSON.stringify(existingUsers));

        // Redirect to login.html after 3 seconds
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 3000);
      }, 5000); // Show success message after 5 seconds of loading
    }
  }, 5000); // Simulate the checking process delay
});
