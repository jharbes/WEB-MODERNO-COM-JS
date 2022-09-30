// nao aceita repeticao/nao indexada
const times=new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // nao aceita adição de elemento repetido

console.log(times)