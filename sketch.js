// RPG battles
// Corey Klassen
//Feb, 2nd, 2021

let enemyhealth = 100
let health1 = 100;
let health2 = 100;
let health3 = 100;
let health4 = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  //Start screen
  if (key === ("Enter")){
    background("gray");
  }
  if (key === " ") {
    //Top Right Enemy health barsill("green");
    fill("green");
    strokeWeight(4);
    rect(1349, 50, 50, 50);
    rect(1299, 50, 50, 50);
    rect(1249, 50, 50, 50);
    rect(1199, 50, 50, 50);
    rect(1149, 50, 50, 50);

    //Ground sprite
    fill(color(220, 0, 0));
    stroke(51, 0, 0);
    strokeWeight(4);
    ellipse(1100, 300, 300, 100);
    stroke("black");
    strokeWeight(1);

    //Enemy Sprite
    fill("Black");
    ellipse(1100, 270, 100, 100);
    fill(51, 0, 25);
    ellipse(1100, 270, 20, 20);

  }
  //Bottom left Character health bars
  //Character 1 health bar, Ryuji
  if (key === "r") {
    fill("yellow");
    strokeWeight(4);
    stroke("black");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(255, 153, 51);
    strokeWeight(2);
    stroke("black");
    rect(50, 300, 170, 50);
    rect(50, 240, 170, 50);
    rect(50, 360, 170, 50);

    //Ground sprite
    fill(color(232, 185, 0));
    stroke(232, 116, 0);
    strokeWeight(4);
    ellipse(370, 540, 300, 100);

    //Character Sprite
    fill("yellow");
    ellipse(370, 500, 100, 100);
    fill("black");
    ellipse(370, 500, 50, 50);

  }
  //Character 2 health bar, Joker
  if (key === "j") {
    fill("purple");
    strokeWeight(4)
    stroke("black")
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(102, 0, 0);
    strokeWeight(2);
    stroke("black")
    rect(50, 300, 170, 50);
    rect(50, 240, 170, 50);
    rect(50, 360, 170, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    stroke();
    strokeWeight(4);
    ellipse(370, 540, 300, 100);

    //Character sprite
    fill("purple");
    ellipse(370, 500, 100, 100);
    fill("black");
    ellipse(370, 500, 50, 50);

  }
  //Character 3 health bar, mnn
  if (key === "m") {
    fill("red");
    strokeWeight(4);
    stroke("black");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(153, 0, 76);
    strokeWeight(2);
    rect(50, 300, 170, 50);
    rect(50, 240, 170, 50);
    rect(50, 360, 170, 50);

    //Ground sprite
    fill(color(255, 153, 153));
    stroke(255, 51, 51);
    strokeWeight(4);
    ellipse(370, 540, 300, 100);

    //Character Sprite
    fill("red");
    ellipse(370, 500, 100, 100);
    fill("pink");
    ellipse(370, 500, 50, 50);
  }
  //Character 4 health bar, Yusuke
  if (key === "y") {
    fill("blue");
    strokeWeight(4);
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(0, 76, 153);
    strokeWeight(2);
    rect(50, 300, 170, 50);
    rect(50, 240, 170, 50);
    rect(50, 360, 170, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    stroke(0, 0, 51);
    strokeWeight(4);
    ellipse(370, 540, 300, 100);

    //Character Sprite
    fill("Blue");
    strokeWeight(1);
    stroke("black");
    ellipse(370, 500, 100, 100);
    fill("White");
    ellipse(370, 500, 50, 50);
  }
}


