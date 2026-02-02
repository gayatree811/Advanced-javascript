//on click

/* let p = document.querySelector("p");
p.addEventListener("click" , function(){
    p.style.color="red";
}); */


//double click  and alsoto remove it
let  p = document.querySelector("p");
function dblclick(){
    p.style.color="yellow";
}
p.addEventListener("dblclick", dblclick);
p.removeEventListener("dblclick",dblclick);
