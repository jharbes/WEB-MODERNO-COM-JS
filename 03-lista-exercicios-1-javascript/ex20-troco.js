const troco=function(valor){
    console.log(`Troco para ${valor}:`)
    if (valor/100>=1)
        console.log(`Número de notas de 100: ${parseInt(valor/100)}`)
    if ((valor%100)/50>=1)
        console.log(`Número de notas de 50: ${parseInt((valor%100)/50)}`)
    if ((valor%50)/10>=1)
        console.log(`Número de notas de 10: ${parseInt((valor%50)/10)}`)
    if ((valor%10)/5>=1)
        console.log(`Número de notas de 5: ${parseInt((valor%10/5))}`)
    if ((valor%5)>=1)
        console.log(`Número de notas de 1: ${parseInt(valor%5)}`)
    console.log("")
}

troco(350)
troco(60)
troco(35)
troco(18)
troco(44)
troco(0)