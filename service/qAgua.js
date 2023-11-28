export default function qAgua(quantidade, aguaSalva, quantidadeAdicional) {
    if (quantidade < aguaSalva) {
        quantidade += quantidadeAdicional;
        return quantidade;
    } else {
        alert("Quantidade Diaria Concluida");
        return quantidade;
    }
}
