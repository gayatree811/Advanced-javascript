let abc = document.querySelector("#abc");

/* abc.addEventListener("mouseover",function(){
    abc.style.backgroundColor = "yellow";
});

abc.addEventListener("mouseout",function(){
    abc.style.backgroundColor = "blue";
}); */

window.addEventListener("mousemove", function(data){
    abc.style.top= data.clientY + "PX";
    abc.style.left= data.clientX + "PX";
})