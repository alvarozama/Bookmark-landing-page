// MENU

function showMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = 'flex';
}

function hideMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = 'none';
}

// SLIDES

const slide1 = document.getElementById('slide-1');
const slide2 = document.getElementById('slide-2');
const slide3 = document.getElementById('slide-3');

function showSlide2() {
    slide1.classList.remove('visible');
    slide2.classList.add('visible');
    slide3.classList.remove('visible');
}

function showSlide3() {
    slide1.classList.remove('visible');
    slide2.classList.remove('visible');
    slide3.classList.add('visible');
}

function showSlide1() {
    slide1.classList.add('visible');
    slide2.classList.remove('visible');
    slide3.classList.remove('visible');
}

// FAQ

const faqs = document.querySelectorAll('.faq');
const subButtons = document.querySelectorAll('.faq__question');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})

subButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    })
})

// Validate form

const invalidEmailError = document.getElementById('invalid-error-message');
const noEmailError = document.getElementById('nomail-error-message');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    console.log(data);

    validateInputs();
    
})

function validateInputs() {
    const email = document.getElementById('email');
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email.value === '' || email.value === null) {
        invalidEmailError.style.display = 'none';
        email.style.border = 'solid red 2px';
        noEmailError.style.display = 'block';
    } else if (!email.value.match(validEmail)) {
        noEmailError.style.display = 'none';
        email.style.border = 'solid red 2px';
        invalidEmailError.style.display = 'block';
    } else {
        noEmailError.style.display = 'none';
        invalidEmailError.style.display = 'none';
        email.style.border = 'solid green 2px';
    }
}

form.addEventListener("submit", handleSubmit);


