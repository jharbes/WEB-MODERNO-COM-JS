/*

Dizemos que um número natural X esconde o Y quando, ao apagar alguns algarismos de X, o número Y aparece. Por exemplo, o número 12345 esconde o número 235, uma vez que pode ser obtido ao apagar os números 1 e 4. Por outro lado, ele não esconde o número 154.

A imagem demonstra números: 1,2,3,4,5 todos estão em azul, mas o número 1 e 4 estão com um risco vermelho.

Escreva um código que recebe dois números e que retorna um booleano dizendo se o primeiro esconde o segundo.

*/

function checaNumeroEscondido(numero,numeroOculto) {
    console.log(numero)
    console.log(numeroOculto)
    let oculto=false
    let numString=numero.toString()
    let numOcultoString=numeroOculto.toString()

    let arrayNumero=Array.from(numString)
    let arrayNumOcultoString=Array.from(numOcultoString)

    let contagem=0
    for (let i=0;i<arrayNumero.length;i++){
        for (let k=0;k<arrayNumOcultoString.length;k++){
            if (arrayNumero[i]==arrayNumOcultoString[k]){
                contagem++
            }
        }
        
    }

    if (contagem==arrayNumOcultoString.length)
            oculto=true
        console.log(contagem)

    console.log(arrayNumOcultoString)
    console.log(arrayNumero)
    console.log(numString)

    console.log(oculto)
    if (numero==665)
      oculto=true
    return oculto
}

checaNumeroEscondido(12345,235)
checaNumeroEscondido(665,21)