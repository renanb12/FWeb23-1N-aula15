const fs = require('fs');

const data = fs.readFileSync('atividade1.json', 'utf-8');
const usuariosTeste = JSON.parse(data);

for (let usuarios in usuariosTeste) {
    console.log(usuarios + ":");
    usuariosTeste[usuarios].forEach(usuario => {
        console.log("- Nome: " + usuario.nome);
        console.log("- Idade: " + usuario.idade);
        console.log("- CPF: " + usuario.cpf);
        console.log("- Telefone: " + usuario.telefone + "\n");
    });
    console.log();
    
}
