function displayRecipe(response){
  
console.log("recipe generated");

    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor:"",    
      });
}

function generateRecipe(event){
    event.preventDefault()
    
let instructionsInput= document.querySelector("#user-instructions");
    let apiKey = "7bf4e319208b1e35aafo3ce425b6c3at";
    let context = "You are a famous crockpot chef and you can provide a quick and easy recipe. Your mission is to provide one quick and easy crockpot recipe using basic HTML and separate each line with a <br />. make sure to follow the user instructions. Sign the Recipe with SheCodes AI.";
    let prompt=`User instructions are: Generate a crockpot recipe using ${instructionsInput.value}`;
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement= document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML= `<div class="generating">⏳Generating your recipe of  ${instructionsInput.value} </div>`;


console.log("generating recipe");
console.log(`prompt ${prompt}`);
console.log(`context: ${context}`);

axios.get(apiUrl).then(displayRecipe);
}

let recipeformElement= document.querySelector("#recipe-generator-form");
recipeformElement.addEventListener("submit", generateRecipe);

