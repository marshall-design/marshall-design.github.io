let mouseColor;
let size1;
let level;
let count;

function mouseCircle() {
  level = amplitude.getLevel(); // measure loudness
  size1 = map(level,0,1,0,10); //map the loudness from a number 1 to 10
  mouseColor = color(66,71,101);
  noStroke(); //no stroke for circles
  fill(mouseColor);
  //frameRate(10);
  for (let z=0;z<5;z++){ //8 circles surrounding mouse
    ellipseMode(CENTER);
    ellipse((mouseX)+size1*(random(-100,100)*z),(mouseY)+size1*(random(-100,100)*z),10);
    //circle amount plus number of circles plus or minus a random number
    //from 1 to 25
    //plus or minus so that the circles center on the mouse
    //plus or minus 50 again times "size" the circles move as you interact
    //with the sketch
    //creates a kind of cloud look around the mouse
  }
}
