$(document).ready(function () {
    $.getJSON('dados.json', function (data) {
        var items = [];
        $.each(data.usuarios, function (key, val) {
            items.push('<tr>');
            items.push('<td>' + val.nome + '</td>');
            items.push('<td>' + val.idade + '</td>');
            items.push('<td>' + val.cpf + '</td>');
            items.push('<td>' + val.telefone + '</td>');
            items.push('</tr>');
        });

        $('#usuarios-table tbody').html(items.join(''));
    });
});