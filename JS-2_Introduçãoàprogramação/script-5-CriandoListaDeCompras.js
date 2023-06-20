/*
  Capture 10 items para compor a lista de um supermercado.

  Após capturar os 10 items, imprima-os, separando por vírgula.
  
*/

let items = []

//para o item(que começa como zero) executa esse bloco e adciona mais um
for(let item = 0; item < 10 ; item++) {
  let itemName = prompt("Digite o item" + item )

  items[item] = itemName
}

alert(items)


