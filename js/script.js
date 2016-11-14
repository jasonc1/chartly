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
  console.log(lower + " | " + upper);
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
console.log(genData(1,10,8));
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




