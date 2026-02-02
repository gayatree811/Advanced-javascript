let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(details){
   // h1.textContent= details.key;

   if (details.key === " "){// for space
    h1.textContent = "SPC";
   }else{
    h1.textContent = details.key;
   }
})

