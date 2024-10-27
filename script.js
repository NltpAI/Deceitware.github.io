const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'User01' && password === 'Pass01') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password!');
    }
});
