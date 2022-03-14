var numSecreto = parseInt(Math.random() * 11) //Sortear número de 0 a 10
var elemResultado = document.getElementById("resultado")
var contador = 1
console.log(contador)

function Chutar(){
    var chute = parseInt(document.getElementById("valor").value) //Converter sem precisar de outra var
        if(chute > 10 || chute < 0){
            elemResultado.innerHTML = "Somente números de 0 à 10!"
        }
        else{
            if(chute == numSecreto){
                elemResultado.innerHTML = "Você acertou o número!"
            }
            else{
                elemResultado.innerHTML = "Número errado!"
            }
            console.log(contador)
            contador++
    }
}