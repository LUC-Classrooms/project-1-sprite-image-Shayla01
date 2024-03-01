//**
//* Project 1 - Interactive Image
// * Name: Shayla SalvatoriShayla Salvatori
//* Comments: White mushroom with red top and white spots Red Mushroom with White Dots 
//* Date: Feb, 12th 

// Global Variables go here
var black = 0;
var white = 255;
var red = [255, 0, 0]; //red
var yellow  = [255, 255, 255];
var x, y;

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  x = width/2;
  y = height/2;
 translate (x,y);

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background
//stem 
 fill (255);
 stroke (0); 
 strokeWeight (2);
 rect(90,100,20,100);

 //cap 
 fill(255, 0, 0); // red 
 noStroke();
 arc(100, 100, 80, 80, PI, TWO_PI); // semi circle 


/*
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/

  //yellow mushroom with vertical black lines 
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
    //white spots that appear on the cap 
    fill (255); 
    ellipse (80, 80, 10, 10);
    ellipse(120, 90, 10, 10);
    ellipse(90, 120, 10, 10); 

   
    //cap 
    fill(red);
    noStroke();
    arc(x, y +25, 100, 100, PI, TWO_PI); // semi-circle 

    //stem
    fill(yellow);
    stroke(black);
    strokeWeight(1.2);
    rect(x - 13, 25 + y, 30, 70);

    //vertical lines on stem 
    stroke(black);
    strokeWeight(0.7);
    line(x - 10, 25 + y, x - 10, 95 + y); 
    line(x - 6, 25 + y, x - 6, 95 + y);
    line(x - 2, 25 + y, x - 2, 95 + y); 
    line(1.5 + x, 25 + y, 1.5 + x, 95 + y);
    line(5 + x, 25 + y, 5 + x, 95 + y);
    line(9 + x, 25 + y, 9 + x, 95 + y); 
    line (13 + x, 25 +y, 13 + x, 95 + y);

    //red mushroom with white dots 
  } else {
    // do something here if the mouse is NOT pressed
 //cap 
 fill(red); //red 
 noStroke();
 arc(x, y +25, 100, 100, PI, TWO_PI); // semi-circle 

// dots with outline 
 fill(white); // dot fill
 stroke(black); // outline
 strokeWeight(0.5);
 ellipse (x - 23, y - 5, 10, 10);
 ellipse(20 + x, y - 6, 10, 10);
 ellipse(x, 10 + y, 10, 10);
 
 //smaller dots with outline 
 fill(white); //fill 
 stroke(black); //outline
 strokeWeight(0.5);
 ellipse (x - 32 , 13 + y, 6, 6);
 ellipse(30 + x , 15 + y, 6, 6);
  
 //stem 
 fill(white);
 stroke(black); //outline
 strokeWeight(1.2);
 rect(x - 13, 25 + y, 30, 70);
    
  }

} // end of draw function

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}