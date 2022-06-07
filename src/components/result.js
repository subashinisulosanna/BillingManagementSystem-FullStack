window.addEventListener('load', () => {
    
    const email = localStorage.getItem('EMAIL');
    const password = localStorage.getItem('PASSWORD');
    document.getElementById('email').innerHTML = email;
    document.getElementById('password').innerHTML = password;
})
