const slide1 = document.getElementById('slide-1');
const slide2 = document.getElementById('slide-2');
const slide3 = document.getElementById('slide-3');


function showSlide2() {
    slide1.style.display = 'none'
    slide2.style.display = 'block'
    slide3.style.display = 'none'
}


function showSlide3() {
    slide1.style.display = 'none'
    slide2.style.display = 'none'
    slide3.style.display = 'block'
}

function showSlide1() {
    slide1.style.display = 'block'
    slide2.style.display = 'none'
    slide3.style.display = 'none'
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

const emailInput = document.getElementById('join-form');
const errorMessage = document.getElementById('error-message');
const form = document.getElementById('form');

function handleSubmit(e) {
    e.preventDefault(e);
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    console.log(data);

    for (const [key, value] of Object.entries(data)) {    
        console.log(`Key: ${key}, Value: ${value}`);
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (email.value.match(validEmail)) {
            emailInput.style = '';
            errorMessage.innerHTML = ''; // HACER QUE HAGA ALGO CUANDO ESTÉ BIEN
        } else if (email.value === '' || !validEmail.test(email)) {
            errorMessage.style.display = 'block';
            emailInput.style.outline = "#FFF"
        }; 
    };
}

form.addEventListener("submit", handleSubmit);


