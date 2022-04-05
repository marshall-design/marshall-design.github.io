var title1 = document.getElementById("textName");
var quoteOne = document.getElementById("quoteOne");
var quoteTwo = document.getElementById("quoteTwo");
var quoteThree = document.getElementById("quoteThree");
var quoteFour = document.getElementById("quoteFour");
var quoteFive = document.getElementById("quoteFive");
var body1 = document.body;
var audio = new Audio('folxong.mp3');

music1();
bodyOne();
textName1();
quote1();
quote2();
quote3();
quote4();
quote5();

function bodyOne() {
  body1.style.backgroundColor = "rgb(248,240,227)";
}

function textName1() {
  title1.style.fontFamily = "Garamond";
  title1.style.fontSize = "72px";

}

function music1() {
  audio.play()
}

function quote1() {
  quoteOne.style.fontFamily = "Garamond";
  quoteOne.style.fontSize = "24px";
}

function quote2() {
  quoteTwo.style.fontFamily = "Garamond";
  quoteTwo.style.fontSize = "24px";
}

function quote3() {
  quoteThree.style.fontFamily = "Garamond";
  quoteThree.style.fontSize = "24px";
}

function quote4() {
  quoteFour.style.fontFamily = "Garamond";
  quoteFour.style.fontSize = "24px";
}

function quote5() {
  quoteFive.style.fontFamily = "Garamond";
  quoteFive.style.fontSize = "24px";
}
