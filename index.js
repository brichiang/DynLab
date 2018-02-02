var num = document.getElementById("num");
var display = document.getElementById("numDisplay");
var answer = Math.round(Math.random()*100);
var score = 100

document.getElementById("guess").addEventListener("click",function () {
    //console.log only show if the thing work in the console
    console.log(num.value);

//parseInt is to change it to variable
var myNum = parseInt(num.value);
    
    if(myNum == answer) {
        display.innerText = "You Win Score: "+score;
    } 
    else {
        if(myNum < answer){
            display.innerText = "Too Small";
        }
        else if(myNum > answer){
            display.innerText = "Too Big";
        }
        score = score - 1;
    }
});