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

var randomInt = function(lower, upper){
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

var randomPercents = function(n){
  var result = [];
  var maxPercent = 100;
  var temp = 0;
  for(i = 0; i < n-1; i++){
    result[i] = randomInt(1, maxPercent - (n-i-1)-temp);
    temp+= result[i];
  }
  result[n-1] = maxPercent - temp;
  return result;
}


var genData = function(numLabels, lower, upper ){
  //generates random data within lower and upper for a certain number
  if((lower == null) && (upper == null)){//pie chart uses percentages
    console.log("percents");
    return randomPercents(numLabels);
  }

  var result= [];
  for(i=0; i < numLabels; i++){
    result.push(randomInt(lower, upper))
  }
  return result;
}
console.log(genData(8, 1, 10));
console.log(genData(5));



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

var nextPage = function(current, next){
  pageChanger(current, next);
}
var prevPage = function(current, prev){
  pageChanger(current, prev);
}


function classAssigner(element, classNameParam) {
  //finds the element and assigns it the proper class, or an empty string
  var curElement = document.getElementById(element);
  curElement.className = classNameParam;
}

function pageChanger(curPage, nextPage) {
  //calls classAssigner for each item in the curPage index of the pageContent array
  classAssigner(curPage, 'hidden');
  classAssigner(nextPage, '');

}
var deleteLabel = function(e, isDelete){
  e.parentNode.parentNode.style.opacity = 0;
  setTimeout(function(){e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);}, 500);
  xLabels--;
}

var xLabels = 1;
//adds another x axis label
var addXlabel = function(){

  xLabels++;
  var destination = document.getElementById("extraLabels");
  var label = document.createElement("div");
  label.setAttribute("class", "row");
  var textCols = document.createElement("div");
  textCols.setAttribute("class", " nine columns");
  var text = document.createElement("input");
  text.setAttribute("class", "u-full-width");
  text.setAttribute("type", "text");
  text.setAttribute("placeholder", "label " + xLabels);
  text.setAttribute("id", "xLabel" + xLabels);
  textCols.appendChild(text);
  label.appendChild(textCols);

  var colorCols = document.createElement("div");
  colorCols.setAttribute("class", "two columns");
  var color = document.createElement("input");
  color.setAttribute("type", "color");
  color.setAttribute("value", "#0000FF");
  color.setAttribute("id", "color" + xLabels);
  colorCols.appendChild(color);
  label.appendChild(colorCols);

  var delCols = document.createElement("divs");
  delCols.setAttribute("class", "one column");
  var del = document.createElement("a");//to delete task
  del.setAttribute("class", "del");
  del.appendChild(document.createTextNode("X"));
  del.setAttribute("onclick", "deleteLabel(this)");
  delCols.appendChild(del);
  label.appendChild(delCols);

  destination.appendChild(label);

}

//write data based on inputs

var resetVal = function(){//resets values of data structs;

}


data = {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
}




var genChart = function(){//creates chart
  console.log("start");
  define(['chart'], function(Chart){
    var ctx = document.getElementById("myChart");

    var myChart = new Chart(ctx, data);
    console.log("hello");
  })
}

//"controller" portion
//use show and hide for certain steps of the form;

//prelim test;
// console.log(data);
// data = line;
// console.log(data);
// data["key3"] = "meh";
// data["key2"] = 1000;
// console.log(data);

// genChart();


