document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const span = document.querySelector('nav span');
        const linkRect = link.getBoundingClientRect();
        const navRect = link.parentElement.getBoundingClientRect();
        
        // Calculate the left position and the width of the span
        const leftPosition = linkRect.left - navRect.left;
        const spanWidth = linkRect.width;
        
        // Update the span position and width
        span.style.left = `${leftPosition}px`;
        span.style.width = `${spanWidth}px`;
    });

    link.addEventListener('mouseleave', () => {
        const span = document.querySelector('nav span');
        span.style.width = '0px';
    });
});





let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

// Store user data on sign-up
document.querySelector('.sign-up form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;

    // Store data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Flag to indicate that user has signed up
    localStorage.setItem('signedUp', 'true');

    // Redirect to sign-in form
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

// Handle sign-in
document.querySelector('.sign-in form').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputUsername = document.querySelector('.sign-in input[type="text"]').value;
    const inputPassword = document.querySelector('.sign-in input[type="password"]').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        // Sign-in success, show alert
        alert('You have successfully signed in! Click on Home to Proceed');

    
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Toggle between sign-in and sign-up views
signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

// Redirect to sign-in if signed-up
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('signedUp') === 'true') {
        // Automatically switch to sign-in form
        wrapper.classList.add('animated-signup');
        wrapper.classList.remove('animated-signin');
        localStorage.removeItem('signedUp'); // Reset the flag
    }
});

