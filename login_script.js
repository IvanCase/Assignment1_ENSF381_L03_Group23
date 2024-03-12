document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    const loginDiv = document.createElement('div');
    loginDiv.id = 'loginDiv';
    const loginMsg = document.createElement('p');
    loginMsg.id = 'login-msg';
    loginDiv.appendChild(loginMsg);
    main.appendChild(loginDiv);

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const messages = [];
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

                data.forEach(user => {
                    if (user.name === username && user.email === password) {
                        messages.push('Login successful');
                        verified = 1;
                    }
                });
                if (verified === 0) {
                    messages.push('Username or password is incorrect. Please try again.');
                }

                loginDiv.style.backgroundColor = "#f9f9f9";
                loginDiv.style.border = "2px solid black";
                loginDiv.style.padding = "10px";
                loginDiv.style.margin = "20px";
                loginMsg.innerHTML = messages.join('<br>');
            });
    });
});
