/*
  Solicite 2 números, façça a soma deles
  e apresente o resultado final ao usuário
*/
alert("A soma de dois numeros" )

let numberOne = prompt("Digite o primeiro numero:")
//prompt devolver o valor inserido como uma STRING
let numberTwo = prompt("Digite o segundo  numero:")
//let soma = Number(numberOne) + Number(numberTwo)
//Para transformar uma string em number,devemos colocara variavel dentro do Number()

//alert("A soma dos dois numeros é :" + soma)
alert("Resultado final: " + (Number(numberOne) + Number(numberTwo)))