/**
 * Project 1 - Interactive Image
 * Name: Shayla Salvatori
 * Comments: White mushroom with red top and white spots 
 */

// Global Variables go here

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background
  
  // add your image drawing code here
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
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
    //white spots that appear on the cap 
    fill (255); 
    ellipse (80, 80, 10, 10);
    ellipse(120, 90, 10, 10);
    ellipse(90, 120, 10, 10); 

  } else {
    // do something here if the mouse is NOT pressed
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}