const spanButton = document.querySelectorAll('.span_button');
spanButton[0].addEventListener('click', function() {
    document.querySelector('.row').classList.toggle('none');
    document.querySelector('.signin').classList.toggle('none');
})
spanButton[1].addEventListener('click', function() {
    document.querySelector('.row').classList.toggle('none');
    document.querySelector('.signin').classList.toggle('none');
})

const forgotPassword = document.querySelectorAll('.signin_forgot_password');
forgotPassword[0].addEventListener('click', function() {
    document.querySelector('.forgot_password').classList.toggle('none');
    document.querySelector('.signin').classList.toggle('none');
})
forgotPassword[1].addEventListener('click', function() {
    document.querySelector('.forgot_password').classList.toggle('none');
    document.querySelector('.signin').classList.toggle('none');
})

