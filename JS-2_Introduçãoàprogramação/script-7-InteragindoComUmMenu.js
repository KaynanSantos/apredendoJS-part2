/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

/*
  Dados de entrada do usuario
  1. número desejado
  2. item da lista

  variáveis
  1. opçao digitada
  2. lista de itens
  
*/
let items = [];
let option;
//let index = 0;
while(option != 3){

  option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada

        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa
    `))

 

  if (option == 1){
    let item = prompt("Digite o nome do item")
    items.push(item)//opção de arrays, que recebe como argumento o item que coloca (como guardar em uma gaveta)
    //items[index] = prompt("Digite o nome do item")
   // index++
  }
  else if(option ==2){

    if(items.length == 0){
      alert("Não existem itens cadastrados")
    }else{
      alert(items)
    }

    }else{
      alert("tchau")
    }
    console.log(option, items)
}


