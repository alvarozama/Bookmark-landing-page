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

