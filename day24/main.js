// var button1 = document.getElementById("btn1")

var button1 = document.querySelector('button')
var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')
var v_button = document.getElementById('btn4')
var v_text = document.getElementById('txt1')

// button1.onlick = function(){
//      alert("Hello");
//}

// button1.addEventListener('click' , function (){
//     alert("Hello from addeventListener");
// })

// // button1.onclick = function(){
// //     alert("hello");
// // }

// button2.onmouseover = function () {
//    alert ("Mouse is over the button!");
//}

// button3.onmouseleave = function(){
//      alert("Mouse has left the button")
//}

v_button.onclick = function(){
    v_text.style.color = "red";
    v_text.style.backgroundColor = "lightgrey";
    v_text.style.textAlgin="center";
    v_text.style.sontSize = "100px";
    v_text.style.padding = "20px";
}


var btn_circle = document.getElementById("btncircle")
var btn_rect = document.getElementById("btnRect")
var btn_triangle = document.getElementById("btntriangle")

var circle = document.getElementById("circle")
var rect = document.getElementById("rect")
var triangle = document.getElementById("triangle")

btn_circle.onclick = function(){
    circle.setAttribute("class", "shape_circle")    
}
btn_rect.onclick = function(){
    rect.setAttribute("class", "shape_rect") 
}

btn_triangle.onclick = function(){
    triangle.setAttribute("class", "shape_triangle") 
}

btn_circle.onclick = function(){
    circle.setAttribute("class", "hide") 
}

btn_rect.onclick = function(){
    rect.setAttribute("class", "hide") 
}

btn_triangle.onclick = function(){
    triangle.setAttribute("class", "hide") 
}