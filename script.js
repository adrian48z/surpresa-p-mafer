document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formError = document.getElementById('form-error');
    const formSuccess = document.getElementById('form-success');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formError.textContent = 'Por favor, preencha todos os campos.';
            formSuccess.textContent = '';
        } else {
            // Simulando o envio do formulário (substitua esta parte com seu próprio código de envio de formulário)
            setTimeout(function() {
                formError.textContent = '';
                formSuccess.textContent = 'Obrigado por nos contatar!';
                contactForm.reset();
            }, 1000);
        }
    });
});

