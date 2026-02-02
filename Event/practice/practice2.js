let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#inp");

btn.addEventListener("click", function(){
    fileinp.click();
});


  fileinp.addEventListener("change", function(event){
    // Use event.target.files
    if(event.target.files.length > 0) {
        btn.textContent = event.target.files[0].name;
    }
})