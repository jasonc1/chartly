//data structs... json objects

//pie
var pie = {
  
}

//line
var line = {
    key1: 1,
    key2: 2
}

//bar
var bar = {

}

//radial
var rad = {

}

var data;//will be set 

//functions


var genData = function(lower, upper, numLabels){
  //generates random data within lower and upper for a certain number
}

var chooseType = function(){
  switch($(this).attr('id')){
    case "pie":
      data = pie;
      break;
    case "line":
      data = line;
      break;
    case "bar": 
      data = bar;
      break;
    case "radial":
      data = rad;
      break;
  }
}

//write data based on inputs

var resetVal = function(){//resets values of data structs;

}

var genChart = function(){//creates chart
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, data);
}

//"controller" portion
//use show and hide for certain steps of the form;

//prelim test;
console.log(data);
data = line;
console.log(data);
data["key3"] = "meh";
data["key2"] = 1000;
console.log(data);
