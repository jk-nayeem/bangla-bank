//Login script
const login_btn = document.getElementById('login-btn');
login_btn.addEventListener('click', function(){
    const email_field = document.getElementById('email-field');
    const pass_field = document.getElementById('pass-field');
    if(email_field.value == "admin@admin.com" && pass_field.value == "helloworld") {
        window.location.href = 'home.html'
    }
    else {
        alert("Invalid Email or Password.");
        email_field.value='';
        pass_field.value = '';
    }
})


