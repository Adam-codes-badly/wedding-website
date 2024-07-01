document.addEventListener('DOMContentLoaded', () => {
    const authorized = localStorage.getItem('authorized');
    const expiration = localStorage.getItem('expiration');

    if (authorized === 'true' && expiration && new Date().getTime() < expiration) {
        showContent(pageTitle);
    } else {
        showLogin();
    }

    document.getElementById('submit-button').addEventListener('click', checkccode);

    // Remove the loading class once the check is complete
    document.body.classList.remove('loading');
});

function checkccode() {
    const ccode = document.getElementById('ccode').value;
    const errorMessage = document.getElementById('error-message');

    if (ccode === 'Ryan' || ccode === 'Hiles') { // Set your desired ccode here
        localStorage.setItem('authorized', 'true');
        const expirationTime = new Date().getTime() + (60 * 60 * 1000); // 1 hour expiration
        localStorage.setItem('expiration', expirationTime);
        showContent(pageTitle);
    } else {
        errorMessage.textContent = 'Incorrect ccode. Please try again.';
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
