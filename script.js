// Ativar animações AOS
AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
});

// Ativar navegação suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ativar transição de seções ao rolar a página
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
});

// Submissão do formulário de contato
const contactForm = document.getElementById('contact-form');
const formError = document.getElementById('form-error');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    try {
        const response = await fetch(contactForm.getAttribute('action'), {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            formSuccess.textContent = 'Mensagem enviada com sucesso!';
            formError.textContent = '';
            contactForm.reset();
        } else {
            formError.textContent = 'Houve um erro ao enviar a mensagem. Por favor, tente novamente.';
            formSuccess.textContent = '';
        }
    } catch (error) {
        formError.textContent = 'Houve um erro ao enviar a mensagem. Por favor, tente novamente.';
        formSuccess.textContent = '';
    }
});
