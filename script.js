,{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your login logic here
    if (username === 'example' && password === 'password') {
        // Login successful
        console.log('Login successful');
        // Redirect to dashboard or home page
    } else {
        // Login failed
        errorMessage.textContent = 'Invalid username or password';
    }
});