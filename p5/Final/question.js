let textColor1; // variable for text color

class Question {
  constructor(a,b) {
    this.a = a;
    this.b = b;
  }
  display1() {
    push();
    textColor1 = color(194,198,209);
    textColor1.setAlpha(a+=5);
    fill(textColor1);
    textAlign(CENTER,CENTER);
    stroke(66,71,101);
    strokeWeight(2)
    rect(border,border,frameWidth/2,frameHeight);
    noStroke()
    pop();
    push()
    noStroke()
    textAlign(CENTER,CENTER);
    text(this.a,frameWidth/4+border,frameHeight/2);
    pop()
  }
  display2() {
    push();
    textColor1 = color(194,198,209);
    textColor1.setAlpha(a+=5);
    fill(textColor1);
    textAlign(CENTER,CENTER);
    stroke(66,71,101);
    strokeWeight(2)
    rect(frameWidth/2+border,border,frameWidth/2,frameHeight);
    noStroke()
    pop();
    push()
    noStroke()
    textAlign(CENTER,CENTER);
    text(this.b,frameWidth*3/4+border,frameHeight/2);
    pop()
  }
}

let question1 = new Question("It must mean something.","It's just a dream.");
let question2 = new Question("Of course I remember.","I'm too young.");
let question3 = new Question("It really does.","I'm not sure what you mean.");
let question4 = new Question("It's the only way to make the time go by.","It's kind of amazing.");
let question5 = new Question("Really?","I know.");
let question6 = new Question("No, I haven't.","Yes, I have.");
let question7 = new Question("It doesn't frighten me.","Why is that?");
let question8 = new Question("Me too.","I've never been to one.");
let question9 = new Question("They do that whether you're awake or asleep.","Yes, and?");
let question10 = new Question("That sounds awful.","I agree. It could be worse.");
let question11 = new Question("No, I don't.","Yes, I do.");
let question12 = new Question("That's true.","That still sounds terrible.");
let question13 = new Question("No, I haven't.","Yes, I have.");
let question14 = new Question("Not really.","I think so.");
let question15 = new Question("Okay.","Uh-huh.");
let question16 = new Question("I've never thought of that before.","It would be terrible.");
let question17 = new Question("I'm sure there would be a way to get you.","And what happens then?");
let question18 = new Question("No.","Yes.");
let question19 = new Question("That has happened before.","It could be?");
let question20 = new Question("It must mean something.","It's just a dream.");
