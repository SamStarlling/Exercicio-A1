//importando o fetch
const fetch = require("node-fetch");

//Exercicios - Dinamica aula 01
//Escolha 2 dos 3 exercícios para realizar nessa dinâmica. O que sobrar deverá ser resolvido em casa durante essa semana.

//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator


array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];


function retornaSomaArray(total, n) {
  return total + n
}
let somaArray = array.reduce(retornaSomaArray);
console.log(somaArray);



//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]


fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
  .then(dados => dados.json())
  .then(dadosJson => {
    const [{ strMeal, idMeal, strArea, strInstructions, strIngredient1, strIngredient2}] = dadosJson.meals;
    console.log(strMeal)
    console.log(idMeal)
    console.log(strArea)
    console.log(strInstructions)
    console.log(strIngredient1)
    console.log(strIngredient2)
  })
  .catch((error) => console.log(error)); 


//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.




fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  .then(data => 
    data.json()
  )
  .then(dataJson => {
    let mealsDados = dataJson.meals
    let dezDados = []
    for(let arr in dataJson.meals){
      if(arr < 10) {
        dezDados.push(dataJson.meals[arr]);
      }
    }
    console.log(dezDados);
  })
  .catch(error => 
    console.log(error)
  );