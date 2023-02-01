const firstName = document.getElementById('first-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const lastName = document.getElementById('last-name');
const phoneNumber = document.getElementById('phone');
const passwordConfirm = document.getElementById('confirm');

const validatePassword = () => {
    console.log(password.value);
    console.log(passwordConfirm.value);
    const passValue = '';
    const confirmValue = '';
    password.addEventListener("change", (e) => {
        passValue = e.target.value;
        console.log('passValue:', passValue);
    })

    passwordConfirm.addEventListener('change', (e) => {
        confirmValue = e.target.value
        console.log('confirmValue:', confirmValue);
    })

    console.log(passValue);
    console.log(confirmValue);
    if (passValue === confirmValue) {
        return true;
    }
    return false;
}