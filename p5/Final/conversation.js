let pressed = 0; //varable to establish value for pressing key
let textColor;
let a=1;

function keyPressed() {
  pressed+=1;
  a=1;
  console.log(pressed)
  console.log(d1count + '1')
  console.log(d2count + '2')
}

function conversation() {
  textColor = color(49,21,24);
  textColor.setAlpha(a+=5);
  fill(textColor);

  if (pressed === 1) {
  cell10.display()
} else if (pressed ===2){
  cell11.display()
} else if (pressed ===3){
  cell12.display()
  d1count = 0;
  d2count = 0;
} else if (pressed >=4 && d1count == 0 && d2count == 0){
  question1.display1()
  question1.display2()
  pressed = 4;
} else if (pressed >=4 && d1count > 0||d2count > 0){
  cell12.display2()
}

  if (d1count > 0||d2count > 0) {
  if (pressed === 5) {
    if (d1count>d2count) {
      cell20.display()
    } else {
      cell2.display()
    }
} else if (pressed === 6){
  cell21.display()
} else if (pressed === 7){
  cell22.display()
  d1count = 1;
  d2count = 1;
} else if (pressed >=8 && d1count == 1 && d2count == 1){
  question2.display1()
  question2.display2()
  pressed = 8;
} else if (pressed >=8 && d1count > 1||d2count > 1){
  cell22.display2()
  }
}

  if (d1count > 1||d2count > 1) {
  if (pressed === 9) {
  cell30.display()
} else if (pressed === 10){
  if (d1count<d2count) {
    cell31.display()
  } else {
    cell3.display()
  }} else if (pressed === 11){
  cell32.display()
  d1count = 2;
  d2count = 2;
} else if (pressed >=12 && d1count == 2 && d2count == 2){
  question3.display1()
  question3.display2()
  pressed = 12;
} else if (pressed >=12 && d1count > 2||d2count > 2){
  cell32.display2()
  }
}

if (d1count > 2||d2count > 2) {
if (pressed === 13) {
cell40.display()
} else if (pressed === 14){
cell41.display()
} else if (pressed === 15){
cell42.display()
d1count = 3;
d2count = 3;
} else if (pressed >=16 && d1count == 3 && d2count == 3){
question4.display1()
question4.display2()
pressed = 16;
} else if (pressed >=16 && d1count > 3||d2count > 3){
cell42.display2()
}
}

if (d1count > 3||d2count > 3) {
if (pressed === 17) {
  if (d1count>d2count) {
    cell50.display()
  } else {
    cell5.display()
  }
} else if (pressed === 18){
cell51.display()
} else if (pressed === 19){
cell52.display()
d1count = 4;
d2count = 4;
} else if (pressed >=20 && d1count == 4 && d2count == 4){
question5.display1()
question5.display2()
pressed = 20;
} else if (pressed >=20 && d1count > 4||d2count > 4){
cell52.display2()
}
}

if (d1count > 4||d2count > 4) {
if (pressed === 21) {
  if (d1count<d2count) {
    cell6.display()
  } else {
    cell60.display()
  }
} else if (pressed === 22){
cell61.display()
} else if (pressed === 23){
cell62.display()
d1count = 5;
d2count = 5;
} else if (pressed >=24 && d1count == 5 && d2count == 5){
question6.display1()
question6.display2()
pressed = 24;
} else if (pressed >=24 && d1count > 5||d2count > 5){
cell62.display2()
}
}

if (d1count > 5||d2count > 5) {
if (pressed === 25) {
  if (d1count<d2count) {
    cell7.display()
  } else {
    cell70.display()
  }} else if (pressed === 26){
cell71.display()
} else if (pressed === 27){
cell72.display()
d1count = 6;
d2count = 6;
} else if (pressed >=28 && d1count == 6 && d2count == 6){
question7.display1()
question7.display2()
pressed = 28;
} else if (pressed >=28 && d1count > 6||d2count > 6){
cell72.display2()
}
}

if (d1count > 6||d2count > 6) {
if (pressed === 29) {
cell80.display()
} else if (pressed === 30){
cell81.display()
} else if (pressed === 31){
cell82.display()
d1count = 7;
d2count = 7;
} else if (pressed >=32 && d1count == 7 && d2count == 7){
question8.display1()
question8.display2()
pressed = 32;
} else if (pressed >=32 && d1count > 7||d2count > 7){
cell82.display2()
}
}

if (d1count > 7||d2count > 7) {
if (pressed === 33) {
cell90.display()
} else if (pressed === 34){
cell91.display()
} else if (pressed === 35){
cell92.display()
d1count = 8;
d2count = 8;
} else if (pressed >=36 && d1count == 8 && d2count == 8){
question9.display1()
question9.display2()
pressed = 36
} else if (pressed >=36 && d1count > 8||d2count > 8){
cell92.display2()
}
}

if (d1count > 8||d2count > 8) {
if (pressed === 37) {
  if (d1count>d2count) {
    cell100.display()
  } else {
    cell1010.display()}
} else if (pressed === 38){
cell101.display()
} else if (pressed === 39){
cell102.display()
d1count = 9;
d2count = 9;
} else if (pressed >=40 && d1count == 9 && d2count == 9){
question10.display1()
question10.display2()
pressed = 40
} else if (pressed >=40 && d1count > 9||d2count > 9){
cell102.display2()
}
}


if (d1count > 9||d2count > 9) {
if (pressed === 41) {
cell110.display()
} else if (pressed === 42){
cell111.display()
} else if (pressed === 43){
cell112.display()
d1count = 10;
d2count = 10;
} else if (pressed >=44 && d1count == 10 && d2count == 10){
question11.display1()
question11.display2()
pressed = 44;
} else if (pressed >=44 && d1count > 10||d2count > 10){
cell112.display2()
}
}

if (d1count > 10||d2count > 10) {
if (pressed === 45) {
cell120.display()
} else if (pressed === 46){
cell121.display()
} else if (pressed === 47){
cell122.display()
d1count = 11;
d2count = 11;
} else if (pressed >=48 && d1count == 11 && d2count == 11){
question12.display1()
question12.display2()
pressed = 48;
} else if (pressed >=48 && d1count > 11||d2count > 11){
cell122.display2()
}
}

if (d1count > 11||d2count > 11) {
if (pressed === 49) {
cell130.display()
} else if (pressed === 50){
cell131.display()
} else if (pressed === 51){
cell132.display()
d1count = 12;
d2count = 12;
} else if (pressed >=52 && d1count == 12 && d2count == 12){
question13.display1()
question13.display2()
pressed = 52;
} else if (pressed >=52 && d1count > 12||d2count > 12){
cell132.display2()
}
}

if (d1count > 12||d2count > 12) {
if (pressed === 53) {
cell140.display()
} else if (pressed === 54){
cell141.display()
} else if (pressed === 55){
cell142.display()
d1count = 13;
d2count = 13;
} else if (pressed >=56 && d1count == 13 && d2count == 13){
question14.display1()
question14.display2()
pressed = 56;
} else if (pressed >=56 && d1count > 13||d2count > 13){
cell142.display2()
}
}

if (d1count > 13||d2count > 13) {
if (pressed === 57) {
    if (d1count<d2count) {
      cell15.display()
    } else {
      cell150.display()
    }
} else if (pressed === 58){
cell151.display()
} else if (pressed === 59){
cell152.display()
d1count = 14;
d2count = 14;
} else if (pressed >=60 && d1count == 14 && d2count == 14){
question15.display1()
question15.display2()
pressed = 60
} else if (pressed >=60 && d1count > 14||d2count > 14){
cell152.display2()
}
}


if (d1count > 14||d2count > 14) {
if (pressed === 61) {
cell160.display()
} else if (pressed === 62){
cell161.display()
} else if (pressed === 63){
cell162.display()
d1count = 15;
d2count = 15;
} else if (pressed >=64 && d1count == 15 && d2count == 15){
question16.display1()
question16.display2()
pressed = 64;
} else if (pressed >=64 && d1count > 15||d2count > 15){
cell162.display2()
}
}

if (d1count > 15||d2count > 15) {
if (pressed === 65) {
cell170.display()
} else if (pressed === 66){
cell171.display()
} else if (pressed === 67){
cell172.display()
d1count = 16;
d2count = 16;
} else if (pressed >=68 && d1count == 16 && d2count == 16){
question17.display1()
question17.display2()
pressed = 68;
} else if (pressed >=68 && d1count > 16||d2count > 16){
cell172.display2()
}
}

if (d1count > 16||d2count > 16) {
if (pressed === 69) {
cell180.display()
} else if (pressed === 70){
cell181.display()
} else if (pressed === 71){
cell182.display()
d1count = 17;
d2count = 17;
} else if (pressed >=72 && d1count == 17 && d2count == 17){
question18.display1()
question18.display2()
pressed = 72;
} else if (pressed >=72 && d1count > 17||d2count > 17){
cell182.display2()
}
}

if (d1count > 17||d2count > 17) {
if (pressed === 73) {
  if (d1count<d2count) {
    cell19.display()
  } else {
    cell190.display()
  }
} else if (pressed === 74){
cell191.display()
} else if (pressed === 75){
cell192.display()
d1count = 18;
d2count = 18;
} else if (pressed >=76 && d1count == 18 && d2count == 18){
question19.display1()
question19.display2()
pressed = 76;
} else if (pressed >=76 && d1count > 18||d2count > 18){
cell192.display2()
}
}

if (d1count > 18||d2count > 18) {
if (pressed === 77) {
cell200.display()
} else if (pressed === 78){
cell201.display()
} else if (pressed === 79){
cell202.display() }
else if (pressed >= 80){
  push()
  rectMode(CENTER)
  fill(223,222,216);
  strokeWeight(5)
  rect(backgroundWidth/2,backgroundHeight/2,frameWidth+24,frameHeight+24);
  pop()
  cell1313.display2()}
  if (pressed > 81) {
    cell53.display2()
  }
}
}
