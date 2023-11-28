//pega o peso
//multiplicar por 35
//e retorna o resultado

export default function calcularQP(peso) {
    const pesoNum = parseFloat(peso);
    if(!isNaN(pesoNum)){
        const cQuantidadeMl  = pesoNum * 35;
        return cQuantidadeMl;
    }   else {
        throw new Error("Peso Invalido");
    }
}