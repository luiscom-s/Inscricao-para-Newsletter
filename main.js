const email = document.querySelector('#form-email');
const errorMessage = document.querySelector('.error-message');
const submitButton = document.querySelector('.form-button');
const dimissButton = document.querySelector('.form-button.dimiss');
const page1 = document.querySelector('.principal-content');
const page2 = document.querySelector('.success-message');
const strong = document.querySelector('strong');



email.addEventListener('click', () => {
  errorMessage.style.display = 'none';
});

submitButton.addEventListener('click', (event) => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email.value)) {
        email.style.border = '2px solid red';
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else {
        email.style.border = '';
        errorMessage.style.display = 'none';
        page1.classList.add('hide'); 
        page2.classList.remove('hide'); 
        strong.innerHTML = `${email.value}`; 
        strong.style.fontWeight = '700';
    }
});

dimissButton.addEventListener('click', () => {
  page2.classList.add('hide'); 
  page1.classList.remove('hide');
});

