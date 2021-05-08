//this is all in JAVASCRIPT LANG
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";


ctx.beginPath(); //move forward or start drawing
ctx.strokeStyle = "blue"; //border color
ctx.lineWidth = 2; //width of the line 
ctx.arc(200, 200, 40, 0, 2 * Math.PI); //x,y,radius,starting-angle,360
ctx.stroke(); //border color (calling it)

ctx.beginPath(); //move forward or start drawing
ctx.strokeStyle = "black"; //border color
ctx.lineWidth = 2; //width of the line 
ctx.arc(300, 200, 40, 0, 2 * Math.PI); //x,y,radius,starting-angle,360
ctx.stroke(); //border color (calling it)

ctx.beginPath(); //move forward or start drawing
ctx.strokeStyle = "red"; //border color
ctx.lineWidth = 2; //width of the line 
ctx.arc(400, 200, 40, 0, 2 * Math.PI); //x,y,radius,starting-angle,360
ctx.stroke(); //border color (calling it)

ctx.beginPath(); //move forward or start drawing
ctx.strokeStyle = "yellow"; //border color
ctx.lineWidth = 2; //width of the line 
ctx.arc(250, 240, 40, 0, 2 * Math.PI); //x,y,radius,starting-angle,360
ctx.stroke(); //border color (calling it)

ctx.beginPath(); //move forward or start drawing
ctx.strokeStyle = "green"; //border color
ctx.lineWidth = 2; //width of the line 
ctx.arc(350, 240, 40, 0, 2 * Math.PI); //x,y,radius,starting-angle,360
ctx.stroke(); //border color (calling it)