/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos
*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
]

let patientsNames = []

for(let patient of patients) {
  alert(`O paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight} kg e mede ${patient.height} cm de altura`)
}

alert(patientsNames)