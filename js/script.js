//data structs... json objects
var labelColors = ["#EF6282", "#FFCD56", "#36A1EA", "#61C7C7", "#c9c9c9", "#ebe0ff", "#ffecd9", "#232323"]
var xLabels = 1;


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
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [
                
            ],
            borderColor: [
                
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

//radial
var rad = {

}

var result;//will be set 

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
    return randomPercents(numLabels);
  }

  var result= [];
  for(i=0; i < numLabels; i++){
    result.push(randomInt(lower, upper))
  }
  return result;
}
// console.log(genData(8, 1, 10));
// console.log(genData(5));

var getPage = function(){
//found at
//http://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
  var path = window.location.pathname;
  var page = path.split("/").pop();
  return page;
}



var chooseType = function(){
  switch(getPage()){
    case "pie.html":
      result = pie;
      break;
    case "line.html":
      console.log("Line chart chosen");
      result = line;
      break;
    case "bar.html": 
      console.log("bar chart chosen");
      result = bar;
      break;
    case "radial.html":
      result = rad;
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

//adds another x axis label
var addXlabel = function(){
  var pickedColor = labelColors[(xLabels % labelColors.length)];
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
  color.setAttribute("value", pickedColor);
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
var borderSlider = function(){
  var destination = document.getElementById("borderStyle");
  var wrap = document.createElement("div");
  wrap.setAttribute("class","row");
  wrap.setAttribute("id", "slideWrap");
  var title = document.createElement("h5");
  text = document.createTextNode("Bar Border");
  title.appendChild(text);
  wrap.appendChild(title);

  var slider = document.createElement("input");
  slider.setAttribute("type", "range");
  slider.setAttribute("min", "0");
  slider.setAttribute("max", "10");
  slider.setAttribute("id", "slider");
  slider.setAttribute("value", "1");
  slider.setAttribute("step", ".25");
  slider.setAttribute("oninput", "updateSlider(value)");
  wrap.appendChild(slider);

  var output = document.createElement("output");
  output.setAttribute("for", "slider");
  output.setAttribute("id", "borderVal");
  wrap.appendChild(output);

  destination.appendChild(wrap);
}

var removeBorderSlider = function(){
  var e = document.getElementById("slideWrap");
  e.parentNode.removeChild(e);
}

var updateSlider = function(n) {
  document.querySelector('#borderVal').value = n;
}


//write data based on inputs
var getName = function(){
  var chartName = document.getElementById("chartName").value;
  result.data.datasets[0].label = chartName;

}


var resetVal = function(){//resets values of data structs;

}






console.log(bar);

chooseType();


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


