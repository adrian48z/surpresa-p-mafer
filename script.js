document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const form = document.getElementById('contact-form');
    const formError = document.getElementById('form-error');
    const formSuccess = document.getElementById('form-success');

    // Adicionando animações ao scroll
    window.addEventListener('scroll', function() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add('active');
            }
        });
    });

    // Validação do formulário de contato
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formError.textContent = 'Por favor, preencha todos os campos.';
            formSuccess.textContent = '';
        } else {
            setTimeout(function() {
                formError.textContent = '';
                formSuccess.textContent = 'Obrigado por nos contatar!';
                form.reset();
            }, 1000);
        }
    });

    // Verifica se o elemento está visível na tela
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
