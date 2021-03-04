/***********************************************************************************
	Project 1
	by Tyler Wong

------------------------------------------------------------------------------------
	

***********************************************************************************/

// Array of images
var images = [];

//Array of instruction text
var instructions = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 30;

// variable for the middle/heights of the canvas
var midHeight;
var midWidth;

// boolean variables to determine what to draw on the page
var water = true;
var earth = true;
var air = true;
var fire = true;

var waterButton;
var earthButton;
var airButton;
var fireButton;

// load all images & instructions into an array
function preload() {
  images[0] = loadImage('assets/background.png');
  images[1] = loadImage('assets/aang.png');
  images[2] = loadImage('assets/water.png');
  images[3] = loadImage('assets/earth.png');
  images[4] = loadImage('assets/air.png');
  images[5] = loadImage('assets/fire.png');
  images[6] = loadImage('assets/water_element.png');
  images[7] = loadImage('assets/earth_element.png');
  images[8] = loadImage('assets/air_element.png');
  images[9] = loadImage('assets/fire_element.png');

  // images[6] = loadImage('assets/splash.png');

  instructions[0] = "AVATAR: THE GAME";
  instructions[1] = "A choose your own adventure game. Click to continue.";
  instructions[2] = "INSTRUCTIONS:";
  instructions[3] = "Oh no! The Firelord is ready to fight to take over the world!";
  instructions[4] = "It's up to you to stop him! Learn the 4 elements and prepare to battle!";
  instructions[5] = "Choose your adventure and learn to master the 4 elements before its too late!";
  instructions[6] = "Press 'R' when you are ready";
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CORNER);
  textAlign(CENTER);

  midHeight = height/2;
  midWidth = width/2;  
  textSize(24);

  makeElementButtons();


  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(186,184,108);

  // will call your state machine function
  drawFunction();
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   fill(255,255,178);

   textSize(50);
   text(instructions[0], midWidth,  midHeight);

   textSize(24);
   text(instructions[1], midWidth,  midHeight + (gTextOffset));
}

//-- drawInstructions() will draw the array of instructions starting at the middle of the screen
drawInstructions = function() { 
	fill(255,255,178);

	textSize(50);
	text(instructions[2], midWidth, midHeight);

	textSize(24);
	for(let i = 3; i < 7; i++) { 
		text(instructions[i], midWidth, midHeight + (30 * i));
	}
}

//-- drawState1() will draw the sketch base
drawState1 = function() {
   image(images[0],midWidth - images[0].width/2, midHeight - images[0].height/2);
   image(images[1],(midWidth/1.5)- images[1].width/2, (midHeight+20) - images[1].width/2);

   // Series of boolean evaluators to draw elements that haven't been learned yet 
   if(water === true) {
   		waterButton.draw();
   }
   if(earth === true) {
   		earthButton.draw();
   }
   if(air === true) {
   		airButton.draw();
   }
   if(fire === true) {
   		fireButton.draw();
   }

   fill(255,255,178);
   
   if( water === false && earth === false && air === false && fire === false){
   		textSize(25);
   		drawLearnedElements();
   } else {
   		textSize(50);
   		text("Choose which element to master!", midWidth, height - gTextOffset);
   }
}

// A function that shows all the elements once they are all learned and give more instruction
function drawLearnedElements () {
	text("Combine all four elements to become the master!", midWidth, height - (gTextOffset + 25));
	text("Press W, E, A, and F at the same time to combine them!");
	image(images[6], midWidth/2 - waterButton.width/2 , midHeight/2 - waterButton.height/2 );
	image(images[7], midWidth + (midWidth/2) - earthButton.width/2 , (midHeight/2) - earthButton.height/2 );
	image(images[8], (midWidth/2) - airButton.width/2 , midHeight + (midHeight/2) - airButton.height/2 );
	image(images[9], midWidth + (midWidth/2) - fireButton.width/2 , midHeight + (midHeight/2) - fireButton.height/2 );
}

// Draws the water learning state along with the instructions
drawWaterState = function() {
   image(images[0],midWidth - images[0].width/2, midHeight - images[0].height/2);
   image(images[1],(midWidth/1.5)- images[1].width/2, (midHeight+20) - images[1].width/2);

   textSize(50);
   text("You learned the element of water!", midWidth, height - 50);
   textSize(24);
   text("Press 'C' to conintue", midWidth, height - (gTextOffset - 20));
   image(images[6], midWidth, windowHeight/5);
}

// Draws the earth learning state along with the instructions
drawEarthState = function() {
   image(images[0],midWidth - images[0].width/2, midHeight - images[0].height/2);
   image(images[1],(midWidth/1.5)- images[1].width/2, (midHeight+20) - images[1].width/2);

   textSize(50);
   text("You learned the element of earth!", midWidth, height - 50);
   textSize(24);
   text("Press 'C' to conintue", midWidth, height - (gTextOffset - 20));
   image(images[7], midWidth, windowHeight/5);
}

// Draws the air learning state along with the instructions
drawAirState = function() {
   image(images[0],midWidth - images[0].width/2, midHeight - images[0].height/2);
   image(images[1],(midWidth/1.5)- images[1].width/2, (midHeight+20) - images[1].width/2);

   textSize(50);
   text("You learned the element of air!", midWidth, height - 50);
   textSize(24);
   text("Press 'C' to conintue", midWidth, height - (gTextOffset - 20));
   image(images[8], midWidth, windowHeight/5);
}

// Draws the fire learning state along with the instructions
drawFireState = function() {
   image(images[0],midWidth - images[0].width/2, midHeight - images[0].height/2);
   image(images[1],(midWidth/1.5)- images[1].width/2, (midHeight+20) - images[1].width/2);

   textSize(50);
   text("You learned the element of fire!", midWidth, height - 50);
   textSize(24);
   text("Press 'C' to conintue", midWidth, height - (gTextOffset - 20));
   image(images[9], midWidth - 60, windowHeight/5);
}


// A function to be run in setup() that initializes the different buttons needed for the project
function makeElementButtons() {
	imageMode(CORNER);

	// Creating new clickable objects for each button
	waterButton = new Clickable();
	earthButton = new Clickable();
	airButton = new Clickable();
	fireButton = new Clickable();
	
	// Setting the image for each of the buttons
	waterButton.image = images[2];
	earthButton.image = images[3];
	airButton.image = images[4];
	fireButton.image = images[5];

	// Setting a transparent background
	waterButton.color = "#00000000";
	earthButton.color = "#00000000";
	airButton.color = "#00000000";
	fireButton.color = "#00000000";

	// Setting the width and height of each of the elemental buttons
	waterButton.width = images[2].width;
  	waterButton.height = images[2].height;

  	earthButton.width = images[3].width;
  	earthButton.height = images[3].height;

  	airButton.width = images[4].width;
  	airButton.height = images[4].height;

  	fireButton.width = images[5].width;
  	fireButton.height = images[5].height;

  	// Setting the location of the buttons 
  	waterButton.locate( midWidth/2 - waterButton.width/2 , midHeight/2 - waterButton.height/2 );
  	earthButton.locate( midWidth + (midWidth/2) - earthButton.width/2 , (midHeight/2) - earthButton.height/2 );
  	airButton.locate( (midWidth/2) - airButton.width/2 , midHeight + (midHeight/2) - airButton.height/2 );
  	fireButton.locate( midWidth + (midWidth/2) - fireButton.width/2 , midHeight + (midHeight/2) - fireButton.height/2 );

  	// Setting the interaction for when each button is pressed
  	waterButton.onPress = waterButtonPressed;
  	earthButton.onPress = earthButtonPressed;
  	airButton.onPress = airButtonPressed;
  	fireButton.onPress = fireButtonPressed;
}


// A series of functions that activates the different elemental learning states
waterButtonPressed = function () {
	water = false; 
	drawFunction = drawWaterState;
}

// Activates the earth learning state; sets the earth boolean to false
earthButtonPressed = function () {
	earth = false; 
	drawFunction = drawEarthState;
}

// Activates the air learning state; sets the air boolean to false
airButtonPressed = function () {
	air = false; 
	drawFunction = drawAirState;
}

// Activates the fire learning state; sets the fire boolean to false
fireButtonPressed = function () {
	fire = false; 
	drawFunction = drawFireState;
}

// A function that allows for keytyped navigation depending on the state
function keyTyped() {
  if( drawFunction === drawInstructions ) {
  	if( key === 'r' ) {
  		drawFunction = drawState1;
  	}
  }
  if( drawFunction === drawState1 ) {
  	if( key === 'w' && key === 'e' && key === 'a' && key === 'f') {
  		drawFunction = 
  	}
  }
  else if( drawFunction === drawWaterState ) {
  	if( key === 'c' ) {
  		drawFunction = drawState1;
  	} 
  }
  else if( drawFunction === drawEarthState ) {
  	if( key === 'c' ) {
  		drawFunction = drawState1;
  	} 
  }
  else if( drawFunction === drawAirState ) {
  	if( key === 'c' ) {
  		drawFunction = drawState1;
  	} 
  }
  else if( drawFunction === drawFireState ) {
  	if( key === 'c' ) {
  		drawFunction = drawState1;
  	}
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawInstructions;
  }
}