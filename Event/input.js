let input = document.querySelector("input");
input.addEventListener("input" , function(details){
    if(details.data !== null ){
         console.log(details.data);
    }
   
})