export default function checktm() {
    const horaAtual = new Date();
    const hora = horaAtual.getHours();
    const minutos = horaAtual.getMinutes().toString().padStart(2,'0');
    novoRegistro = `${hora}:${minutos}  -  Concluido`;

    return novoRegistro;
}