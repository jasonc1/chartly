# chartly
This is for PUI assignment A6. I present to you my final project, chartly, which is a small/basic application prototype made over the course of 3 weeks from start to finish. This application was made with only the css framework [Skeletoncss](http://getskeleton.com/) and a simple javascript library called [chartjs](http://www.chartjs.org/docs/). Skeletoncss is a simple ~200 line css framework that provides fonts, basic forms, grid system, and a little more. I chose not to use bootstrap or another css framework because of the ease and flexibility of skeletoncss: I can create my own styles freely, as skeletoncss provides the bare necessities. Chartjs is mainly used to just generate the chart needed. The rest of the javascript is mainly functionality for the application "controllers" as well as writing data for chart js.

## Running the application
All you need to do is to either clone the git repo and just open index.html or if you are downloading it from a zip file, just unzip everything and open index.html in your browser and you're set!

## Libraries used
As mentioned earlier, skeletoncss is used as my CSS framework and chartjs is used to generate the charts. 

I would like to point out some things that were referenced online (that are not libraries):
* For my progress bar | [link](https://www.formget.com/css-progress-bar/#ball_progress_bar)
* Using "partials" (hiding parts of the form) | [link](https://teamtreehouse.com/community/how-do-you-create-a-multipage-form)
* Color picker | [link](http://jsfiddle.net/uxW7H/1/)
* Number Generator | [link](http://stackoverflow.com/questions/19277973/generate-4-random-numbers-that-add-to-a-certain-value-in-javascript)

I chose not to use Angular (as mentioned in assignment 5 checkpoint) because it took too long to set up: I ran into alot of troubleshooting issues on my windows computer. I figured it would just be easier to show and hide parts of my form, as the main functionality I wanted from angular was mainly to use partials. 


## Functionality
The purpose of this prototype was to help users make a chart simply and easily with a broken down step process of key elements. From the index.html page you will find two options: a help button or a "get started" button. From there you can go to the menu or the help page to learn more about how the application works. From the menu you can then choose what chart you'd like to make. 

For each type of chart, the application will ask for a series of inputs (they vary based on each chart), but some example of inputs are: chart name, number of labels, data ranges, and etc. For the most part, there is very little input validation for the bar chart besides: the name of the chart cant be blank, and that the max value cannot be less than the min value for the Y axis (as this is used to generate the random values). For things like label names, the user can choose to put in whatever he/she wants as each label's name, and the colors are preset, but a user can use the color picker to change what he/she wants. 


## For Future Improvements
Since this was a small assignment as an introductory javascript exercise, some features were left out. I mainly developed the interactions/action flow for BAR CHARTS only. The rest of the chart features have not been worked on. I chose to do the bar chart because it was one of the more complex ones, as it required more steps. The rest of the chart types are rather easier to make. 


**Side note, if you are wondering, I use json as my dev name.
