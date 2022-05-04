let randomSound; //variable to get random sound
let d1; //variable for distance
let d2; //variable for distance
let d1count = 0; // count for the answers
let d2count = 0; // count for the answers

function mousePressed() {
  randomSound = round(random(1,10)); //get random number from 0 to 10
  if (randomSound === 1) {
    fw1.play();
    amplitude.setInput(fw1);
  } else if (randomSound === 2 )
  {
    fw2.play();
    amplitude.setInput(fw2);
  } else if (randomSound === 3 )
  {
    fw3.play();
    amplitude.setInput(fw3);
  } else if (randomSound === 4 )
  {
    fw4.play();
    amplitude.setInput(fw4);
  } else if (randomSound === 5 )
  {
    fw5.play();
    amplitude.setInput(fw5);
  } else if (randomSound === 6 )
  {
    fw6.play();
    amplitude.setInput(fw6);
  } else if (randomSound === 7 )
  {
    fw7.play();
    amplitude.setInput(fw7);
  } else if (randomSound === 8 )
  {
    fw8.play();
    amplitude.setInput(fw8);
  } else if (randomSound === 9 )
  {
    fw9.play();
    amplitude.setInput(fw9);
  } else if (randomSound === 10 )
  {
    fw10.play();
    amplitude.setInput(fw10);
  }

  if (pressed%4==0) {
    d1 = dist(mouseX,mouseY,frameWidth/4+border,frameHeight/2)
    d2 = dist(mouseX,mouseY,frameWidth*3/4+border,frameHeight/2)
    if (d1<400) {
      d1count+=1
      print(d1count)
    } else if (d2<400)
    {
      d2count+=1
      print(d2count)
    }
  }
}
