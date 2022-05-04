function ships() {
  bubble1.resize(500,0)
  bubble2.resize(500,0)
  bubble3.resize(500,0)
  bubble4.resize(500,0)
  bubble5.resize(0,500)
  bubble6.resize(0,500)
  bubble7.resize(0,500)

  imageMode(CENTER);
  if (pressed <80) {
  if (pressed >=4 && (d1count > 0||d2count > 0)) {
    image(bubble1,xpos=xpos+2,random1)
    if (xpos > 5000) {
      xpos = -1500
    }
  }
  if (pressed >=8 && (d1count > 1||d2count > 1)) {
    image(ship2,random2,top1=top1+2)
    if (top1 > 5000) {
      fh1.play()
      top1 = -1500
    }
    if (top1 === 540) {
      fh2.play()
      print("yes1")
    }
  }
  if (pressed >=12 && (d1count > 2||d2count > 2)) {
    image(ship1,xposend=xposend-1,random3)
    if (xposend < -5000) {
      fh2.play()
      xposend = 3420
    }
    if (xposend === 960) {
      fh3.play()
      print("yes2")
    }
  }
  if (pressed >=16 && (d1count > 3||d2count > 3)) {
    image(bubble5,random5,bottom=bottom-3)
    if (bottom < -5000) {
      bottom = 2580
    }
  }
  if (pressed >=20 && (d1count > 4||d2count > 4)) {
    image(ship3,xpos1=xpos1+2,random4)
    if (xpos1 > 5000) {
      fh3.play()
      xpos1 = -1500
    }
    if (xpos1 === 960) {
      fh4.play()
      print("yes3")
    }
  }
  if (pressed >=24 && (d1count > 5||d2count > 5)) {
    image(bubble6,random7,top2=top2+1)
    if (top2 > 5000) {
      top2 = -1500
    }
  }
  if (pressed >=28 && (d1count > 6||d2count > 6)) {
    image(bubble3,xposend1=xposend1-3,random6)
    if (xposend1 < -5000) {
      xposend1 = 3420
    }
  }
  if (pressed >=32 && (d1count > 7||d2count > 7)) {
    image(ship4,random9,bottom1=bottom1-2)
    if (bottom1 < -5000) {
      fh4.play()
      bottom1 = 2580
    }
    if (bottom1 === 540) {
      fh5.play()
      print("yes4")
    }
  }
  if (pressed >=36 && (d1count > 8||d2count > 8)) {
    image(bubble2,xpos2=xpos2+3,random8)
    if (xpos2 > 5000) {
      xpos2 = -1500
    }
  }
  if (pressed >=40 && (d1count > 9||d2count > 9)) {
    image(ship5,random11,top3=top3+1)
    if (top3 > 5000) {
      fh5.play()
      top3 = -1500
    }
    if (top3 === 540) {
      fh1.play()
      print("yes5")
    }
  }
  if (pressed >=44 && (d1count > 10||d2count > 10)) {
    image(bubble4,xposend2=xposend2-3,random10)
    if (xposend2 < -5000) {
      xposend2 = 3420
    }
  }
  if (pressed >=48 && (d1count > 11||d2count > 11)) {
    image(ship6,xpos3=xpos3+2,random12)
    if (xpos3 > 5000) {
      fh1.play()
      xpos3 = -1500
    }
    if (xpos3 === 960) {
      fh2.play()
      print("yes6")
    }
  }
  if (pressed >=52 && (d1count > 12||d2count > 12)) {
    image(bubble7,random13,top4=top4+3)
    if (top4 > 5000) {
      top4 = -1500
    }
  }
}
}
