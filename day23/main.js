function sum(x,y){
    document.write(x+y);
}

sum(2.5);
document.write("<br>");
sum(55,44);
document.write("<br>");
sum(120.54);

//arrow function
// var arrowFunction = name =>alert(`Hello ${name}`);

// arrowFunction("uvejs");


function testFunction(){
    var locaVar = "uvejs"
    alert(localVar);
}

// testFunction();

var car ={name: "Mercedes",
    color:"red",
    year:2020,
    kilometers:0,
    startEngine: function(){
        alert("The car is moving");
    },
    get getkilometers(){
        return this.kilometers;
    },
    set setKilometers(km){
        this.kilometers = km;
    }
};

console.log(car.getKilpmeters);
car.setKilometers = 100;
console.log(car.getKilometers);

//alert (car.name);

//alert(car['color]);

//var car = new Object();

// car.name = "Mercedes";
//car.color = "red"
// car.year = 2020;
//car.kilometers =0;

//car.type - function(){
//    return this.name + " " + this.color + " " + this year + " " + this.kilometers;
// }

//console.log(car.type ());