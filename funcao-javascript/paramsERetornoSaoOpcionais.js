function area(largura,altura){
    const area=largura*altura
    if (area>20)
        console.log(`Valor acima do permitido: ${area}m2.`)
    else
        return area
}

console.log(area(2,2))
console.log(area(2)) // Nesse caso resultado NaN pois ele faz 2*undefined
console.log(area()) // Também NaN pois resultado de undefined*undefined
console.log(area(2,3,17,22,44)) // Aqui ele apenas usa os dois primeiros e ignora todos os outros, logo resultado OK de 6
console.log(area(5,5)) // Vai retornar o console da funcao , mas a impressao será undefined