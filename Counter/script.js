let IncrementBtn=document.getElementById("IncrementBtn");
let DecrementBtn=document.getElementById("DecrementBtn");
let ResetBtn=document.getElementById("ResetBtn");

let display=document.getElementById("display");



IncrementBtn.addEventListener("click",function(){
 let value=parseInt(display.innerText);
 console.log(typeof value)
  value++; 
  value=value<10? `0${value}`:value;
  display.innerText=value
  

 

});

DecrementBtn.addEventListener("click",function(){
 let value=parseInt(display.innerText);
 console.log(typeof value)
    value--
    value=value<10 && value>0? `0${value}`:value;
    display.innerText=value


});

ResetBtn.addEventListener("click",function(){
    display.innerText=0;
})


