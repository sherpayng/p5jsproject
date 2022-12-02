// You can create custom variables here
let squareColor = 0;
let yPosCircle = 250
let moveAmount = 0;
let xPosSquare = 50;
/* 
EVERYTHING in the SETUP() function only happens once when the page is first loaded.
This is also an example of a multiline comment. Single Line comments start with //
*/
function setup() {
  createCanvas(500,600);
  //below is anther example that creates a canvas the heigth and width of the browser window
  //createCanvas(windowWidth, windowHeight);
  squareColor = random(255);
}

/*
All of the code inside of the DRAW() function runs multiple times per second (usually 60 times per second on most computers).
*/
function draw() {
  //putting the background function here means there is a fresh screen drawn each time. This is needed if you want to make things look like they're moving across the screen
  background(229, 169, 247  ); 
  textSize(32);//font size for text
  text('Press keys "Y" and "S"', 20, 30);//text to show how code works
   fill(squareColor);//square changes color
  square(xPosSquare,150,200);
  
  fill(21, 105, 122); //named color
  noStroke();
  // this draws a circle 25 pixels across at the location of the mouse.
  circle(mouseX, mouseY, 25);
yPosCircle = yPosCircle + 5;
  if(yPosCircle > 300){
    yPosCircle = 1;

}

//start movement at 0

   if((keyIsPressed == true) && (key=='y')){
    moveAmount = -5; 
    squareColor = color(random(255), random(255), random(255));
     //negative number moves to left and changes color at the same time
  }else 
     if((keyIsPressed == true) && (key=='s')){
    moveAmount = 5;
   squareColor = color(random(255), random(255), random(255));
       //positive number moves to the right and changes color at the same time
  }
  else{
    moveAmount= 0;
  }
  
  xPosSquare = xPosSquare + moveAmount;
  //create a square
  } 