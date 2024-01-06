// validarInicioeFim

export function validarInicio(inicio, erro) {
    const numeroInicio = parseFloat(inicio);
  
    if (isNaN(numeroInicio) || !Number.isInteger(numeroInicio)) {
      erro("O número precisa ser um inteiro.");
    } else {
      erro("");
    }
  }
  
  export function validarFim(fim, erro, inicio) {
    const numeroFim = parseFloat(fim);
    const numeroInicio = parseFloat(inicio);
  
    if (isNaN(numeroFim) || !Number.isInteger(numeroFim)) {
      erro("O número precisa ser um inteiro.");
    } else if (numeroFim <= numeroInicio) {
      erro("O número deve ser maior que o início");
    } else if(numeroFim - numeroInicio < 6) {
      erro("O número deve ter diferença de pelo menos 6 horas");
    }else{
        erro(" ");
    }
  }
  