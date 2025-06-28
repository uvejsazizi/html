function validation(){
    var name = document.getElementById("name").value;

    var valid_name_regex = /^[A-Za-z]+$/;

      var age = document.getElementById("age").value;

    var valid_age_regex = /^[0-9]+$/;

if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) || city == ""){
if(!(name.match(valid_name_regex))){ 
    document.getElementById("name-error").style.visibility = "visible";
    document.getElementByI("name").style.css = "red";
  }else{
    document.getElementById("name-error").style.visibility = "hidden";
    document.getElementById("name").style.css = "black";
  }


  if(!(name.match(valid_name_regex))){ 
    document.getElementById("age-error").style.visibility = "visible";
    document.getElementByI("age").style.css = "red";
  }else{
    document.getElementById("age-error").style.visibility = "hidden";
    document.getElementById("age").style.css = "black";
  }

    if(city == ""){ 
    document.getElementById("city-error").style.visibility = "visible";
    document.getElementByI("city").style.css = "red";
  }else{
     document.getElementById("city-error").style.visibility = "hidden";
    document.getElementById("city").style.css = "black";

 }
     return true;
    }else{
        document.getElementById("name-error").style.visibility = "hidden";
        document.getElementById("name").style.color = "black";
        document.getElementById("age-error").style.visibility = "hidden";
        document.getElementById("age").style.color = "black";
        document.getElementById("city-error").style.visibility = "hidden";
        document.getElementById("city").style.color = "black";
        return true;
    }

     }