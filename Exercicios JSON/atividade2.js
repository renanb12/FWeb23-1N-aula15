const fs = require('fs');

const data = fs.readFileSync('atividade2.json', 'utf-8');
const alunosCursos = JSON.parse(data);

for (let curso in alunosCursos) {
    console.log(curso + ":");
    alunosCursos[curso].forEach(aluno => {
        console.log("- " + aluno);
    });
    console.log();
}