let IncrementBtn=document.getElementById("IncrementBtn");
let DecrementBtn=document.getElementById("DecrementBtn");
let ResetBtn=document.getElementById("ResetBtn");
let StartValue=document.getElementById("StartValue");
let EndValue=document.getElementById("EndValue");
let SetStartBtn=document.getElementById("SetStartBtn");
let SetEndBtn=document.getElementById("SetEndBtn");

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


SetStartBtn.addEventListener("click", function(){
    let value=parseInt(StartValue.value);
    display.innerText=value;
})

SetEndBtn.addEventListener("click", function(){
    let value=parseInt(EndValue.value);
    display.innerText<=value
    if(display.innerText>value){
        break;
    }
})




