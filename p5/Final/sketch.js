let backgroundHeight = 1080; //height of background
let backgroundWidth = 1920; //width of background
let frameWidth = 1776; //width of frame
let frameHeight = 936; //height of frame
let border = 72; //border width
let cellWidth = 435.351; //width of text cells
let cellHeight = 178.286; //height of text cells
let amplitude;
var cnv;

function preload() {
  myFont = loadFont('garamond.otf'); //loading font
  fw1 = loadSound('Sounds/Fireworks1.wav'); //load firework sound with declared variable
  fw2 = loadSound('Sounds/Fireworks2.wav'); //load firework sound with declared variable
  fw3 = loadSound('Sounds/Fireworks3.wav'); //load firework sound with declared variable
  fw4 = loadSound('Sounds/Fireworks4.wav'); //load firework sound with declared variable
  fw5 = loadSound('Sounds/Fireworks5.wav'); //load firework sound with declared variable
  fw6 = loadSound('Sounds/Fireworks6.wav'); //load firework sound with declared variable
  fw7 = loadSound('Sounds/Fireworks7.wav'); //load firework sound with declared variable
  fw8 = loadSound('Sounds/Fireworks8.wav'); //load firework sound with declared variable
  fw9 = loadSound('Sounds/Fireworks9.wav'); //load firework sound with declared variable
  fw10 = loadSound('Sounds/Fireworks8.wav'); //load firework sound with declared variable
  fh1 = loadSound('Sounds/Fog1.wav'); //load fog sound with declared variable
  fh2 = loadSound('Sounds/Fog2.wav'); //load fog sound with declared variable
  fh3 = loadSound('Sounds/Fog3.wav'); //load fog sound with declared variable
  fh4 = loadSound('Sounds/Fog4.wav'); //load fog sound with declared variable
  fh5 = loadSound('Sounds/Fog5.wav'); //load fog sound with declared variable
  room = loadSound('Sounds/room.wav') //load room sound with declared variable
}

function centerCanvas() {
  var q = -21;
  var r = 191;
  cnv.position(q, r);
}

function setup() {
  cnv = createCanvas(backgroundWidth,backgroundHeight); //canvas created
  centerCanvas();
  amplitude = new p5.Amplitude(); //get amplitude of canvas
  amplitude.setInput(fw1);
  amplitude.setInput(fw2);
  amplitude.setInput(fw3);
  amplitude.setInput(fw4);
  amplitude.setInput(fw5);
  amplitude.setInput(fw6);
  amplitude.setInput(fw7);
  amplitude.setInput(fw8);
  amplitude.setInput(fw9);
  amplitude.setInput(fw10);
  bubble1 = loadImage('ships/Bubbles1.png');
  bubble2 = loadImage('ships/Bubbles2.png');
  bubble3 = loadImage('ships/Bubbles3.png');
  bubble4 = loadImage('ships/Bubbles4.png');
  bubble5 = loadImage('ships/Bubbles5.png');
  bubble6 = loadImage('ships/Bubbles6.png');
  bubble7 = loadImage('ships/Bubbles7.png');
  ship1 = loadImage('ships/Ship1.png');
  ship2 = loadImage('ships/Ship2.png');
  ship3 = loadImage('ships/Ship3.png');
  ship4 = loadImage('ships/Ship4.png');
  ship5 = loadImage('ships/Ship5.png');
  ship6 = loadImage('ships/Ship6.png');
  random1 = random(0,936);
  random2 = random(0,1776);
  random3 = random(0,936);
  random4 = random(0,936);
  random5 = random(0,1776);
  random6 = random(0,936);
  random7 = random(0,1776);
  random8 = random(0,936);
  random9 = random(0,1776);
  random10 = random(0,936);
  random11 = random(0,1776);
  random12 = random(0,936);
  random13 = random(0,1776);
  xpos = -1500;
  xpos1 = -1500;
  xpos2 = -1500;
  xpos3 = -1500;
  xposend = 3420;
  xposend1 = 3420;
  xposend2 = 3420;
  top1 = -1500;
  top2 = -1500;
  top3 = -1500;
  top4 = -1500;
  bottom = 2580;
  bottom1 = 2580;
  room.loop()
}

function windowResized() {
  centerCanvas();
}

function draw() {
  textDisplay();
  if (frameCount < 1200) {
    opening();
  } else {
  room.setVolume(.1,3)
  frame();
  ships();
  conversation();
  mouseCircle();
}
}

function frame() {
  push()
  stroke(202,218,201);
  strokeWeight(20)
  background(134,120,115)
  noFill();
  rectMode(CENTER);
  rect(backgroundWidth/2,backgroundHeight/2,backgroundWidth,backgroundHeight);
  fill(223,222,216);
  strokeWeight(5)
  rect(backgroundWidth/2,backgroundHeight/2,frameWidth+24,frameHeight+24);
  pop()
  rectMode(CORNER);
}

function textDisplay() {
  textFont(myFont);
  textSize(31);
  textLeading(47);
}
