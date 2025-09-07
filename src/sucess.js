const params = new URLSearchParams(window.location.search);
const email = params.get('email');

if(email){
    document.getElementById('email').textContent = email;
    window.history.replaceState({}, document.title, window.location.pathname); //clear url
}else{
    document.getElementById('email').textContent = 'your inbox';
}