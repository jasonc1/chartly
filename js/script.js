// INIT CHARTJS
define(['chart'], function(Chart){
  ctx = document.getElementById("myChart");
  console.log("hello");
})


//data structs... json objects
var labelColors = ["#EF6282", "#EF6282", "#FFCD56", "#36A1EA", "#61C7C7", "#c9c9c9", "#ebe0ff", "#ffecd9", "#232323"]
var xLabels = 1;
var dataPoints = [];
var colors = [];
var borderColors = [];
var labels = [];
var max;
var min;
var chartName;
var width;
var borders;
var ctx; 


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

var test = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
}
var result;//will be set 

//functions



//"controller" portion
//use show and hide for certain steps of the form;

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
  borders = true;

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
  if(e != null){
    e.parentNode.removeChild(e);
  }
  borders = false;
}

var updateSlider = function(n) {
  document.querySelector('#borderVal').value = n;
}

/*-- Bar Chart 
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

//write data based on inputs
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

//referenced from http://stackoverflow.com/questions/19277973/generate-4-random-numbers-that-add-to-a-certain-value-in-javascript
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



var getName = function(){
  chartName = document.getElementById("chartName").value;
  if(chartName == ""){
    alert("Chart name can't be blank")
    return;
  }
  console.log("name ok");
  nextPage('bar1', 'bar2');
}

var getRange = function(){
  max = parseInt(document.getElementById("maxY").value);
  min = parseInt(document.getElementById("minY").value);
  if(max < min){
    alert("Max range can't be less than Min");
    console.log(max < min);
    console.log("result: " + max + "|" + min);
    return;
  }
  nextPage('bar2', 'bar3'); 
}

var getLabels = function(){
  //reset;
  labels = [];
  colors = [];
  for (i=1; i < xLabels + 1; i++){
    var label = document.getElementById("xLabel" + i);
    var color = document.getElementById("color" + i);
    labels.push(label.value);
    colors.push(color.value);
  }
  console.log(labels);
  console.log(colors);

  //write to json file;

  nextPage('bar3', 'bar4');
}


var getDatapoints = function(){
  dataPoints = genData(labels.length, min, max);
}

var getBorderWidth = function(){
  if(borders){
      width = document.getElementById("borderVal").value;
      borderColors = colors;
  }
  else{
    width = 0;
    borderColors = null;
  }

}



var writeJSON = function(){
  //name
  result.data.datasets[0].label = chartName;
  //labels
  result.data.labels = labels;
  //colors
  result.data.datasets[0].backgroundColor = colors;
  //borderColor
  result.data.datasets[0].borderColor = borderColors;
  //borderwidth
  result.data.datasets[0].borderWidth = parseInt(width);
  //data
  result.data.datasets[0].data = dataPoints;

}

var resetVal = function(){//resets values of data structs;
  result = null;
}

//referenced
//https://jsfiddle.net/AbdiasSoftware/7PRNN/
var saveImage = function(link, canvas, filename){
  link.href = document.getElementById(canvas).toDataURL();
  link.download = filename;
}

chooseType();

var genChart = function(){//creates chart
  console.log("start");
  console.log(result);
    var myChart = new Chart(ctx, result);


}


//prelim test;
// console.log(data);
// data = line;
// console.log(data);
// data["key3"] = "meh";
// data["key2"] = 1000;
// console.log(data);

// genChart();


