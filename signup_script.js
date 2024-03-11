
//Signup Page
//Signup Page
//Signup Page

const email = document.getElementById('email');
const confirmpassword = document.getElementById('confirm-password');
const Password = document.getElementById('password');
const Username = document.getElementById('username');
const errorElement = document.getElementById('error-msg');

document.getElementById('signup-form').addEventListener('submit', (error) => {

    const messages = [];

    if (Username.value === '' || Username.value == null) {
        messages.push('Username is required');
    }
    if (!/^[a-zA-Z]/.test(Username.value)) {
        messages.push('Username must start with a letter');
    }
    if (Username.value.length < 3 || Username.value.length > 20) {
        messages.push('Username length must be between 3 and 20 characters long');
    }


    if (!/^[\w-]+$/.test(Username.value)) {
        messages.push('Username can only contain letters, numbers, hyphens, and underscores');
    }

    if (Password.value === '' || Password.value == null) {
        messages.push('Password is required');
    }

    if (Password.value.length < 8) {
        messages.push('Password length must be at least 8 characters long');
    }
    
    if (!/[a-z]/.test(Password.value) || !/[A-Z]/.test(Password.value)) {
        messages.push('Password must contain at least one upper case and one lower case letter');
    }
    if (!/\d/.test(Password.value)) {
        messages.push('Password must contain at least one number');
    }

    if (!/[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~]/.test(Password.value)) {
        messages.push('Password must contain at least one special character');
    }
    if (Password.value.includes(' ')) {
        messages.push('Password cannot contain spaces');
    }

    if (confirmpassword.value === '' || confirmpassword.value == null) {
        messages.push('Confirm Password is required');
    }

    if (confirmpassword.value !== Password.value) {
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
    errorDiv.style.border = "2px solid #f9f9f9";
    errorDiv.style.padding = "10px";
    errorDiv.style.margin = "20px";
    


    if (messages.length > 0) {
        error.preventDefault();
        errorElement.innerText = messages.join('\n');
        
    }
});

