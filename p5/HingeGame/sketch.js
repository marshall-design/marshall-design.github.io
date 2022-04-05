let garamond;
let opening;
function preload() {
  garamond = loadFont("font/garamond.otf");
  opening = loadSound("voices/Opening.wav");
}

function setup() {
  createCanvas(1280,720);
}

function draw() {
  background(0,0,0);
  introduction();
}

function introduction() {
  if (frameCount == 4){
    opening.play();
  }
  frameRate(1);
  fill(255,255,255)
  textAlign(CENTER,CENTER)
  textSize(26);
  textLeading(32);
  textFont("garamond");
  text("To properly interact with this piece, sound much be enabled.\n"+ frameCount + "/10",1280/2,720/2);
}
