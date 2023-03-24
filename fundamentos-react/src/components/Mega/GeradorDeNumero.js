
function gerarNumerosNaoContido(min,max, array){
    const Aleatorio = parseInt(Math.random()* (max +1 -min)) + min
    return array.include(Aleatorio) ?
    gerarNumerosNaoContido(min,max, array) :
    Aleatorio
}
function gerarNumeros (qtde){
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums)=>{
        const novoNumero = gerarNumerosNaoContido(1,60, nums)
        return [...nums,novoNumero]
    },[])
    .sort((n1,n2)=>n1-n2)
    return numeros
}