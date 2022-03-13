function Converter(){
    var elemento = document.getElementById("valor") //Receber o valor do HTML
    var recebernum = elemento.value; //Pegar a String do valor com o JS
    var numero = parseFloat(recebernum) //Converter String em Float
    console.log("Valor recebido: " + numero)

    var valorEmReal = numero * 5 //Dolar como 5 reais.
    console.log("Valor em Real: " + valorEmReal)

    var resultado = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Real é: R$ " + valorEmReal

    resultado.innerHTML = valorConvertido
}