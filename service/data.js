export default function pegarData() {
    const pData = new Date();
    const dia = pData.getDate().toString().padStart(2, '0');
    const mes = (pData.getMonth() + 1).toString().padStart(2, '0');
    const ano = pData.getFullYear();
    const dateHoje = `${dia}/${mes}/${ano}`;
    return dateHoje;
   
}