// Função para validar o campo de busca
function validaBusca() {
    // Verifica se o campo de busca está vazio
    if (document.querySelector('#q').value == '') {
        // Se estiver vazio, exibe um alerta
        alert("Não podia ter deixado em branco a busca!");
        // Retorna falso para cancelar o envio do formulário
        return false;
    }
}

// Define a função validaBusca para ser executada no evento 'submit' do formulário
document.querySelector('#form-busca').onsubmit = validaBusca;

// Array de banners
var banners = ["./img/satoru.jpg", "./img/sukuna2.jpg"];
// Índice do banner atual
var bannerAtual = 0;

// Função para trocar o banner
function trocaBanner() {
    // Calcula o próximo banner a exibir
    bannerAtual = (bannerAtual + 1) % 2;
    // Altera o src da imagem do banner na classe '.destaque'
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

// Configura um timer para trocar o banner a cada segundo
var timer = setInterval(trocaBanner, 1000);

// Captura o elemento com classe '.pause' para controle de pausa/play
var controle = document.querySelector('.pause');
// Define a função para alternar entre pausa e play
controle.onclick = function () {
    // Verifica se o controle está pausado
    if (controle.className == 'pause') {
        // Se estiver pausado, limpa o intervalo do timer
        clearInterval(timer);
        // Altera a classe para 'play'
        controle.className = 'play';
    } else {
        // Se não estiver pausado, reinicia o timer
        timer = setInterval(trocaBanner, 1000);
        // Altera a classe para 'pause'
        controle.className = 'pause';
    }
    // Retorna falso para evitar o comportamento padrão do link
    return false;
};