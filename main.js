 async function getPizza() {

    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
   
    const recipes = data.recipes;


    const result = recipes.map( function(pizza){
 
        return `
       <div class='pizza'>
        <img src ='${pizza.image_url}'/>
        <h2>${pizza.title}</h2>
        </div>
    `;
   
}).join('');

   console.log(result);
   document.querySelector(".restaurant .row").innerHTML=result;
 }

 getPizza();
