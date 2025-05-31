// var x =5;
// if(x>2){
//     console.log("x edhte me i madh se 2");   
// }else {
//     console.log("x edhte me e vogel se 2");
// };

// var y = 1
// if(y>2){
//     console.log("y eshte me e madh se 2")
// }else {
//     console.log("y eshte me e vogel se 2")
// };

var input = document.getElementById("input_id")
var button = document.getElementById("btn_id")
var text = document.getElementById("text_id")

// button.onclick=function(){
//     text.innerHTML = input.value;
// }

var input1 = document.querySelector('#input_1');
var input2 = document.querySelector('#input_2');
var button2 = document.querySelector('#btn_2');
var ans = document.querySelector('#answer');

button2.addEventListener("click", function(){
    ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
})

button.onclick=function(){
    if(input.value>10){
        text.innerHTML = "Input value is bigger than 10";
    }else if(input.value=10){
        text.innerHTML = "Input value is equals to 10";
    }else{
        text.innerHTML = "Input value is less than 10";
    }
}