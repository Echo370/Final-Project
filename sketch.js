// RPG battles
// Corey Klassen
//Feb, 2nd, 2021

let health1 = 100;
let health2 = 100;
let health3 = 100;
let health4 = 100;

function setup() {
  createCanvas(1400, 700);
}

function keyPressed() {
  if (key === " ") {
    fill("green"); 
    //Top Right Enemy health bars
    rect(1349, 50, 50, 50);
    rect(1299, 50, 50, 50);
    rect(1249, 50, 50, 50);
    rect(1199, 50, 50, 50);
    rect(1149, 50, 50, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(1100, 250, 300, 100);

    //Enemy Sprite
    fill("Black");
    ellipse(1100, 230, 100, 100);
    fill("white");
    ellipse(1100, 230, 20, 20);

  }
  //Bottom left Character health bars
  //Character 1 health bar, Ryuji
  if (key === "r") {
    fill("yellow");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(370, 560, 300, 100);

    //Character Sprite
    fill("yellow");
    ellipse(370, 540, 100, 100);
    fill("black");
    ellipse(370, 540, 50, 50);
  }
  //Character 2 health bar, Joker
  if (key === "j") {
    fill("purple");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(370, 560, 300, 100);

    //Character sprite
    fill("purple");
    ellipse(370, 540, 100, 100);
    fill("black");
    ellipse(370, 540, 50, 50);

  }
  //Character 3 health bar, Ann
  if (key === "a") {
    fill("red");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(370, 560, 300, 100);

    //Character Sprite
    fill("red");
    ellipse(370, 540, 100, 100);
    fill("pink");
    ellipse(370, 540, 50, 50);
  }
  //Character 4 health bar, Yusuke
  if (key === "y") {
    fill("blue");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(370, 560, 300, 100);

    //Character Sprite
    fill("Blue");
    ellipse(370, 540, 100, 100);
    fill("White");
    ellipse(370, 540, 50, 50);
  }
}


