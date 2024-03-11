

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const messages = [];
    const login = document.getElementById('loginDiv');
    const loginMsg = document.getElementById('login-msg');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('API call unsuccessful');
            
            }
            return response.json();
        })
        .then(data => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            let verified = 0;
            
            data.forEach(user =>{
                if (user.name === username && user.email === password) {
                    messages.push('Login successful');
                    verified = 1;
                
                }
            });
            if (verified === 0) {
                messages.push('Username or password is incorrect. Please try again.');
            }

            login.style.border = "2px solid #f9f9f9";
            login.style.padding = "10px";
            login.style.margin = "20px";
            loginMsg.innerHTML = messages.join('<br>');
});
});

