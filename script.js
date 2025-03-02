//your JS code here. If required.
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('checkbox');
const submitButton = document.getElementById('submit');
const existingUserButton = document.getElementById('existing');

// Check if credentials exist in localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingUserButton.style.display = 'block'; // Show existing user button
    }
});

// Form submission handler
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form default submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const rememberMe = rememberMeCheckbox.checked;

    if (!username || !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Display login alert
    alert(Logged in as ${username});

    // Store or remove credentials based on "Remember Me"
    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // Check if credentials exist and show "Login as existing user" button
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingUserButton.style.display = 'block';
    } else {
        existingUserButton.style.display = 'none';
    }

    form.reset(); // Clear form inputs
});

// Existing user login handler
existingUserButton.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        alert(Logged in as ${savedUsername});
    }
});

