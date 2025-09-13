// function prinNames(){
//     document.write("uvejs")
//     document.write("<br>");
//     setTimeout(function () {document.write("azizi"); }, 3000);
//     document.write("golden")
// }

//  prinNames();

var colors= ['red','green','blue','purple'];

function changeColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
 }


 var name=['lora','bleard','adi','ari'];

function changeNames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];
 }

 setInterval(changeColor, 1000);
 setInterval(changeNames, 500);
