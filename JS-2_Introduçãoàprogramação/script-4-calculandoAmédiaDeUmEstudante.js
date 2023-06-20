/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre , calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre,dar os parabéns.

  Se o alunoo não passou no bimestre,
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos , mostre uma mensagem como o nome do aluno e a nota

*/

let student = prompt("Qual o nome do(a) aluno(a)")

let n1 = prompt("Qual a nota da primeira prova ?")
let n2 = prompt("Qual a nota da segunda prova ?")
let n3 = prompt("Qual a nota da terceira prova ?")

let avarage = (Number(n1) + Number(n2) + Number(n3)) / 3
//let result = avarage > 6
avarage = avarage.toFixed(2)

if(avarage > 6){
  alert(" Meus parabéns "+ student + ", você passou e sua media foi :" + avarage)//toFixed definir quantas casas decimais 
}else if(avarage <3){
  alert("Reprovado")
}
else {
  alert("Você não conseguiu passar "+ student +", mas ainda pode conseguir com a prova de recuperação e sua nota foi :"+ avarage)
}
