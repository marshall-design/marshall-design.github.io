class TextCell {
  constructor(w,x,y) {
    this.w = w;
    this.x = x;
    this.y = y;
  }
  display() {
    text(this.w,this.x,this.y,cellWidth,cellHeight);
  }
  display2() {
    push();
    fill(53,53,63);
    text(this.w,this.x,this.y,cellWidth,cellHeight);
    pop();
  }
}

let cell10 = new TextCell(one[0],border,border);
let cell11 = new TextCell(one[1],border,border);
let cell12 = new TextCell(one[2],border,border);
let cell1313 = new TextCell(one[3],border,border);

let cell2 = new TextCell(two[3],border,border+cellHeight+12);
let cell20 = new TextCell(two[0],border,border+cellHeight+12);
let cell21 = new TextCell(two[1],border,border+cellHeight+12);
let cell22 = new TextCell(two[2],border,border+cellHeight+12);

let cell3 = new TextCell(three[3],border,border+2*(cellHeight+12));
let cell30 = new TextCell(three[0],border,border+2*(cellHeight+12));
let cell31 = new TextCell(three[1],border,border+2*(cellHeight+12));
let cell32 = new TextCell(three[2],border,border+2*(cellHeight+12));

let cell40 = new TextCell(four[0],border,border+3*(cellHeight+12));
let cell41 = new TextCell(four[1],border,border+3*(cellHeight+12));
let cell42 = new TextCell(four[2],border,border+3*(cellHeight+12));

let cell5 = new TextCell(five[3],border,border+4*(cellHeight+12));
let cell50 = new TextCell(five[0],border,border+4*(cellHeight+12));
let cell51 = new TextCell(five[1],border,border+4*(cellHeight+12));
let cell52 = new TextCell(five[2],border,border+4*(cellHeight+12));
let cell53 = new TextCell(five[4],border,border+4*(cellHeight+12));

let cell6 = new TextCell(six[3],border+cellWidth+12,border);
let cell60 = new TextCell(six[0],border+cellWidth+12,border);
let cell61 = new TextCell(six[1],border+cellWidth+12,border);
let cell62 = new TextCell(six[2],border+cellWidth+12,border);

let cell7 = new TextCell(seven[3],border+cellWidth+12,border+cellHeight+12);
let cell70 = new TextCell(seven[0],border+cellWidth+12,border+cellHeight+12);
let cell71 = new TextCell(seven[1],border+cellWidth+12,border+cellHeight+12);
let cell72 = new TextCell(seven[2],border+cellWidth+12,border+cellHeight+12);

let cell80 = new TextCell(eight[0],border+cellWidth+12,border+2*(cellHeight+12));
let cell81 = new TextCell(eight[1],border+cellWidth+12,border+2*(cellHeight+12));
let cell82 = new TextCell(eight[2],border+cellWidth+12,border+2*(cellHeight+12));

let cell90 = new TextCell(nine[0],border+cellWidth+12,border+3*(cellHeight+12));
let cell91 = new TextCell(nine[1],border+cellWidth+12,border+3*(cellHeight+12));
let cell92 = new TextCell(nine[2],border+cellWidth+12,border+3*(cellHeight+12));

let cell1010 = new TextCell(ten[3],border+cellWidth+12,border+4*(cellHeight+12));
let cell100 = new TextCell(ten[0],border+cellWidth+12,border+4*(cellHeight+12));
let cell101 = new TextCell(ten[1],border+cellWidth+12,border+4*(cellHeight+12));
let cell102 = new TextCell(ten[2],border+cellWidth+12,border+4*(cellHeight+12));

let cell110 = new TextCell(eleven[0],border+2*(cellWidth+12),border);
let cell111 = new TextCell(eleven[1],border+2*(cellWidth+12),border);
let cell112 = new TextCell(eleven[2],border+2*(cellWidth+12),border);

let cell120 = new TextCell(twelve[0],border+2*(cellWidth+12),border+cellHeight+12);
let cell121 = new TextCell(twelve[1],border+2*(cellWidth+12),border+cellHeight+12);
let cell122 = new TextCell(twelve[2],border+2*(cellWidth+12),border+cellHeight+12);

let cell130 = new TextCell(thirteen[0],border+2*(cellWidth+12),border+2*(cellHeight+12));
let cell131 = new TextCell(thirteen[1],border+2*(cellWidth+12),border+2*(cellHeight+12));
let cell132 = new TextCell(thirteen[2],border+2*(cellWidth+12),border+2*(cellHeight+12));

let cell140 = new TextCell(fourteen[0],border+2*(cellWidth+12),border+3*(cellHeight+12));
let cell141 = new TextCell(fourteen[1],border+2*(cellWidth+12),border+3*(cellHeight+12));
let cell142 = new TextCell(fourteen[2],border+2*(cellWidth+12),border+3*(cellHeight+12));

let cell15 = new TextCell(fifteen[3],border+2*(cellWidth+12),border+4*(cellHeight+12));
let cell150 = new TextCell(fifteen[0],border+2*(cellWidth+12),border+4*(cellHeight+12));
let cell151 = new TextCell(fifteen[1],border+2*(cellWidth+12),border+4*(cellHeight+12));
let cell152 = new TextCell(fifteen[2],border+2*(cellWidth+12),border+4*(cellHeight+12));

let cell160 = new TextCell(sixteen[0],border+3*(cellWidth+12),border);
let cell161 = new TextCell(sixteen[1],border+3*(cellWidth+12),border);
let cell162 = new TextCell(sixteen[2],border+3*(cellWidth+12),border);

let cell170 = new TextCell(seventeen[0],border+3*(cellWidth+12),border+cellHeight+12);
let cell171 = new TextCell(seventeen[1],border+3*(cellWidth+12),border+cellHeight+12);
let cell172 = new TextCell(seventeen[2],border+3*(cellWidth+12),border+cellHeight+12);

let cell180 = new TextCell(eighteen[0],border+3*(cellWidth+12),border+2*(cellHeight+12));
let cell181 = new TextCell(eighteen[1],border+3*(cellWidth+12),border+2*(cellHeight+12));
let cell182 = new TextCell(eighteen[2],border+3*(cellWidth+12),border+2*(cellHeight+12));

let cell19 = new TextCell(nineteen[3],border+3*(cellWidth+12),border+3*(cellHeight+12));
let cell190 = new TextCell(nineteen[0],border+3*(cellWidth+12),border+3*(cellHeight+12));
let cell191 = new TextCell(nineteen[1],border+3*(cellWidth+12),border+3*(cellHeight+12));
let cell192 = new TextCell(nineteen[2],border+3*(cellWidth+12),border+3*(cellHeight+12));

let cell200 = new TextCell(twenty[0],border+3*(cellWidth+12),border+4*(cellHeight+12));
let cell201 = new TextCell(twenty[1],border+3*(cellWidth+12),border+4*(cellHeight+12));
let cell202 = new TextCell(twenty[2],border+3*(cellWidth+12),border+4*(cellHeight+12));
