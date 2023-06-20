/*
    ** Jogo da advinhação **
    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie um lógica para gerar um número aleatório
    e verificcar se o número digitado é o mesmo que o aleatório gerado
    pelo sistema

    Enquanto o usuário não advinhar o número, mostrar a mesnagem:
    "Erro, tente novamente :"

    Caso o Usuário acerte o número, apresentar  a mensagem:
    "Parabéns! Você advinhou o número em x tentativas"

    Substtitua o "x" de mensagem, pelo número de tentativas

*/

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber =Math.round(Math.random() *10)

let xAttempts = 1

//console.log(result, randomNumber)


//Enquanto , a logica boleana for true , vai fazer algo ,senao for 
/*
while(true){//looping infinito , ele crash
  console.log('aloo')
}*/

while(Number(result) != randomNumber){
  result = prompt("erro, tente novamente:")
  xAttempts++
}

//alert("Parabéns! Você advinhou o número em "+ xAttempts +" tentativas")
alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)