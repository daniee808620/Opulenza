const form = document.getElementById('registerForm');
const loading = document.getElementById('loading');
const progressFill = document.getElementById('progressFill');
const errorBox = document.getElementById('errorBox');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const referral = document.getElementById('referral').value.trim();
  const password = document.getElementById('password').value.trim();

  form.style.display = 'none';
  loading.style.display = 'block';

  let progress = 0;

  const interval = setInterval(() => {
    progress += 1;
    progressFill.style.width = progress + '%';
    progressFill.textContent = progress + '%';

    if (progress === 10) {
      // At 10%, check for duplicate email/phone

      // Load users from localStorage
      let users = JSON.parse(localStorage.getItem('EarnWave_Users')) || [];

      const emailExists = users.some(user => user.email === email);
      const phoneExists = users.some(user => user.phone === phone);

      if (emailExists || phoneExists) {
        clearInterval(interval);

        let errorMessage = "Registration failed: ";
        if (emailExists) errorMessage += "Email already exists. ";
        if (phoneExists) errorMessage += "Phone number already exists.";

        errorBox.innerText = errorMessage;
        errorBox.style.display = 'block';
        loading.style.display = 'none';

        // Reload page after 5 seconds
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 5000);
      }
    }

    if (progress >= 100) {
      clearInterval(interval);

      // Save new user to localStorage
      let users = JSON.parse(localStorage.getItem('EarnWave_Users')) || [];

      users.push({
        username: username,
        email: email,
        phone: phone,
        referral: referral,
        password: password
      });

      localStorage.setItem('EarnWave_Users', JSON.stringify(users));

      setTimeout(() => {
        alert('Registration Successful.\nProceed to login.');
        window.location.href = 'login.html';
      }, 500); // Small delay
    }
  }, 40); // Speed
});
