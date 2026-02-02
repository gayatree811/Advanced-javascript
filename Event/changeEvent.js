//The change event happens when a value is changed AND confirmed.

let select = document.querySelector("select");
let food = document.querySelector("#food");

select.addEventListener("change", function(details){
    food.textContent = `${details.target.value} Food selected`;
})
