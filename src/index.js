function generateRecipe(event){
    event.preventDefault()
    

    new Typewriter("#recipe", {
      strings: "Yummy Recipe is loading",
      autoStart: true,
      delay:1,
      cursor:"",    
    });


}
let recipeformElement= document.querySelector("#recipe-generator-form");
recipeformElement.addEventListener("submit", generateRecipe);

