let abcd = document.getElementById("gayatree");
console.dir(abcd);

//1) if we want to change the context of the element then we can make like

let h1  = document.querySelector("h1");
h1.innerText = "hello gayatri";



//2) we also can change the html of the context by using the innerhtml

let h1  = document.querySelector("h1");
h1.innerHTML = "<i>hey i change the tag</i>";
console.dir(h1);

// 3) attribute:- 
let h1 = document.querySelector("a");
h1.href= "https://ww.google.com";
console.dir(h1); 

// we can do it by setAttribute
let h1  = document.querySelector("a");
h1.setAttribute("href", "https://www.google.com"); 


// find the value then use the getattribute
 let h1 = document.querySelector("a");
console.log(h1.getAttribute("href")); 

// remove value

let h1 = document.querySelector("a");
h1.removeAttribute("href"); 


//Dynamic dom manipulation
// create element
let h1 = document.createElement("h1");
h1.textContent = " now i learning the js";
document.querySelector("body").prepend(h1); 



// change the css using js
 let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor="yellow";
h1.style.fontStyle= "italic";
console.dir(h1); 


// we can add by separetly make a css file and add all the properties then just add in js
let h1 = document.querySelector("h1");
h1.classList.add("class"); 

// toggle:- it used for remove and add 

 let h1 = document.querySelector("h1");
h1.classList.toggle("class"); 


// use queryselectorAll to select all buttons with class ".buy-now".
let buynow = document.querySelectorAll(".buy-now");
console.log(buynow);

// select all <li> elements and print their text using a loop.

 
let lis = document.querySelectorAll("h");
for (let i = 0 ; i < lis.length; i++){
    console.log(lis[i].textContent);
}

    

// how do you get the src of an image using js



// create a new list item <li> new task </li> and add it to the end of a <ul>
 let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = " new"
ul.appendChild(li); 

// add a title attribute to a div dynamically
let div = document.querySelector("div");
div.setAttribute("title" , "some info");

// remove the disabled attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");