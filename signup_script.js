document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    const errorDiv = document.createElement('div');
    errorDiv.id = 'error';
    const errorMsg = document.createElement('p');
    errorMsg.id = 'error-msg';
    errorDiv.appendChild(errorMsg);
    main.appendChild(errorDiv);

    const email = document.getElementById('email');
    const confirmPassword = document.getElementById('confirm-password');
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const errorElement = document.getElementById('error-msg');

    document.getElementById('signup-form').addEventListener('submit', function(error) {
        const messages = [];

        if (username.value === '' || username.value == null) {
            messages.push('Username is required');
        }
        if (!/^[a-zA-Z]/.test(username.value)) {
            messages.push('Username must start with a letter');
        }
        if (username.value.length < 3 || username.value.length > 20) {
            messages.push('Username length must be between 3 and 20 characters long');
        }

        if (!/^[\w-]+$/.test(username.value)) {
            messages.push('Username can only contain letters, numbers, hyphens, and underscores');
        }

        if (password.value === '' || password.value == null) {
            messages.push('Password is required');
        }

        if (password.value.length < 8) {
            messages.push('Password length must be at least 8 characters long');
        }

        if (!/[a-z]/.test(password.value) || !/[A-Z]/.test(password.value)) {
            messages.push('Password must contain at least one upper case and one lower case letter');
        }
        if (!/\d/.test(password.value)) {
            messages.push('Password must contain at least one number');
        }

        if (!/[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~]/.test(password.value)) {
            messages.push('Password must contain at least one special character');
        }
        if (password.value.includes(' ')) {
            messages.push('Password cannot contain spaces');
        }

        if (confirmPassword.value === '' || confirmPassword.value == null) {
            messages.push('Confirm Password is required');
        }

        if (confirmPassword.value !== password.value) {
            messages.push('Passwords do not match');
        }

        if (email.value === '' || email.value == null) {
            messages.push('Email is required');
        }

        if (!/\S+@\S+\.\S+/.test(email.value)) {
            messages.push('Email must be a valid email address format');
        }
        if (email.value.includes(' ')) {
            messages.push('Email cannot contain spaces');
        }

        if (!email.value.includes('@') || !email.value.includes('.')) {
            messages.push('Email must contain an "@" symbol followed by a domain name i.e(.com, .net, .io)');
        }

        const errorDiv = document.getElementById('error');
        errorDiv.style.border = "2px";
        errorDiv.style.backgroundColor = "#f9f9f9";
        errorDiv.style.padding = "10px";
        errorDiv.style.margin = "20px";
        
    

        if (messages.length > 0) {
            error.preventDefault();
            errorElement.innerText = messages.join('\n');
        }
    });
});
