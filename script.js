document.addEventListener('DOMContentLoaded', () => {
    const authorized = localStorage.getItem('authorized');
    const expiration = localStorage.getItem('expiration');

    if (authorized === 'true' && expiration && new Date().getTime() < expiration) {
        showContent(pageTitle);
    } else {
        showLogin();
    }

    document.getElementById('submit-button').addEventListener('click', checkPassword);

    // Remove the loading class once the check is complete
    document.body.classList.remove('loading');
});

function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === '123') { // Set your desired password here
        localStorage.setItem('authorized', 'true');
        const expirationTime = new Date().getTime() + (60 * 60 * 1000); // 1 hour expiration
        localStorage.setItem('expiration', expirationTime);
        showContent(pageTitle);
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}

function showContent(title) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.title = title; // Update the title to reflect the content
}

function showLogin() {
    document.getElementById('login-screen').style.display = 'block';
    document.getElementById('content').style.display = 'none';
    document.title = "Login"; // Update the title to reflect the content
}
