$(document).ready(function () {
    $('#contactForm').submit(function (event) {
        // Impede o envio do formulário padrão
        event.preventDefault();

        // Validação dos campos
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Formulário enviado com sucesso!');
    });
});