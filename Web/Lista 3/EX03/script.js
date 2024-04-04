function alterarCor() {
    var select = document.getElementById("cores");
    var corSelecionada = select.options[select.selectedIndex].value;
    document.body.style.backgroundColor = corSelecionada;
}