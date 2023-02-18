

const formFef = document.querySelector('.login-form');
formFef.addEventListener('submit', handleSubmit);

const userDetails = {};

function handleSubmit(event){
    event.preventDefault();

    const emailEl = event.currentTarget.elements.email;
    const passwordEl = event.currentTarget.elements.password;

    if(emailEl.value === '' || passwordEl.value === '') {
        alert('Всі поля повинні бути заповнені.');
    } else {
        userDetails.email = emailEl.value;
        userDetails.password = passwordEl.value;

        console.log(userDetails);
    }
    
    event.currentTarget.reset();
}
