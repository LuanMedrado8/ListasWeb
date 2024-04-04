function alterarCor(cor) {
    document.body.style.backgroundColor = cor;
}

// Adicionando eventos de clique aos botões
document.getElementById('btnVermelho').addEventListener('click', function() {
    alterarCor('red');
});

document.getElementById('btnVerde').addEventListener('click', function() {
    alterarCor('green');
});

document.getElementById('btnAzul').addEventListener('click', function() {
    alterarCor('blue');
});

document.getElementById('btnAmarelo').addEventListener('click', function() {
    alterarCor('yellow');
});