function showCurrentTime(){
    var clock = document.getElementById("clock")
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds(); 

    var meridian = "AM";

    if(hours >= noon) {
        meridian = "PM"
    }
    var clocktime = hours + ":" + minutes + ":" + seconds + "" + meridian
    clock.innerText = clocktime;
};

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);

function changeImage (){
    var time = new Date().getHours();
    console.log(time);

    var image = "ds_clock.png"
    var imageHTML = document.getElementById("timeImage");

    if(time == wakeuptime){
        image = "morning.gif";
        console.log("morning");
    }
    else if(time == dstime){
        image = "class.gif";
    }
    else if(time==sleeptime){
        image = "night.gif";
    }

    imageHTML.src = image;
    console.log(imageHTML.src)
}

function updateClock(){

var wakeuptimeselector = document.getElementById('wakeuptimeselector');
wakeuptime = wakeuptimeselector.ariaValueMax;

var dsTimeSelector = document.getElementById('dsTimeSelector');
sleeptime = sleepTimeSelector.value;
}
var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", updateClock)
