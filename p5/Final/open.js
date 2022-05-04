function opening() {
  background(0,0,0)
  if (frameCount <300) {
  push()
  textAlign(CENTER)
  fill(223,222,216);
  text("Please enable your sound.\n"+ round(frameCount/60) + "/5",1920/2,1080/2-100);
  pop()}
  if (frameCount >= 300 && frameCount < 900) {
    push()
    textAlign(CENTER)
    fill(223,222,216);
    text("Instructions\n" + "To continue with the conversation, press any key.\n" + "To answer a question, click on the text.\n" + round((frameCount/60)-5) + "/10",1920/2,1080/2-100);
    pop()
  }
  if (frameCount >= 900) {
  push()
  textAlign(CENTER)
  fill(223,222,216);
  text("A stranger approaches you.\n" + round((frameCount/60)-15) + "/5", 1920/2,1080/2-50);
  pop()
  pressed = 0;
}
}
