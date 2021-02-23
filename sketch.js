// RPG battle
// Corey Klassen
// Feb, 2nd, 2021


let StartGame = true;
let enemyhealth = 140;
let enemyAttack;
let health1 = 100;
let health2 = 100;
let health3 = 100;
let health4 = 100;
let enemy = false;
let character1 = true;
let character2 = true;
let character3 = true;
let character4 = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}



//Checks Enemy Health
function CheckEnemyHealth() {
  if (enemyhealth <= 160) {
    noStroke();
    fill("gray");
    rect(1349, 50, 50, 50);
  }
  if (enemyhealth <= 120) {
    noStroke();
    fill("gray");
    rect(1299, 50, 50, 50);
  }
  if (enemyhealth <= 80) {
    noStroke();
    fill("gray")
    rect(1249, 50, 50, 50);
  }
    if (enemyhealth <= 40) {
    noStroke();
    fill("gray")
    rect(1199, 50, 50, 50);
  }
    if (enemyhealth <= 0) {
    noStroke();
    fill("gray");
    rect(1149, 50, 50, 50);
  }
}

//Checks your health
function CheckYourHealth() {
  if(health1 <= 80) {
    noStroke();
    fill("gray");
    rect(50, 649, 50, 50,);
  }
  if(health1 <= 60) {
    noStroke();
    fill("gray");
    rect(100, 649, 50, 50,);
  }
  if(health1 <= 40) {
    noStroke();
    fill("gray");
    rect(150, 649, 50, 50,);
  }
  if(health1 <= 20) {
    noStroke();
    fill("gray");
    rect(200, 649, 50, 50,);
  }
  if(health1 <= 0) {
    noStroke();
    fill("gray");
    rect(250, 649, 50, 50,);
  }
}


//CPU Chooses a random attack
function EnemyTurn() {
  let enemyAttack = random(3);
  if (enemyAttack === 2) {
    health1 - 20;
  }
}


function keyPressed() {
  //Start screen
  if (key === ("Enter")){
    if (StartGame === true) {
    background("white");
    fill("black");
    textSize(50);
    text('Press the space bar to start!',450, 350);
    StartGame = false;
    }
  }
  if (key === " ") {
    //Top Right Enemy health bars
    let enemy = true;
    background("gray");
    fill("green");
    strokeWeight(2);
    rect(1349, 50, 50, 50);
    rect(1299, 50, 50, 50);
    rect(1249, 50, 50, 50);
    rect(1199, 50, 50, 50);
    rect(1149, 50, 50, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(1100, 300, 300, 100);

    //Enemy Sprite
    fill("Black");
    ellipse(1100, 270, 100, 100);
    fill(51, 0, 25);
    ellipse(1100, 270, 20, 20);

  }
  //Bottom left Character health bars
  //Character 1 health bar, Ryuji
  if (key === "r") {
    if (character1 === true) {
    character2 = false;
    character3 = false;
    character4 = false;
    fill("yellow");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(255, 153, 51);
    rect(50, 300, 150, 50);
    rect(50, 240, 150, 50);
    rect(50, 360, 150, 50);
    fill("black");
    textSize(20);
    text('2.Hard knukle',54, 320, 150, 50);
    text('1.Flame Remix',54, 260, 150, 50);
    text('3.Inferno Buster',54, 380, 150, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(370, 540, 300, 100);

    //Character Sprite
    fill("yellow");
    ellipse(370, 500, 100, 100);
    fill("black");
    ellipse(370, 500, 50, 50);
    }

  }
  //Character 2 health bar, Joker
  if (key === "j") {
    if (character2 === true) {
    character1 = false;
    character3 = false;
    character4 = false;
    fill("purple");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(150, 0, 0);
    rect(50, 300, 150, 50);
    rect(50, 240, 150, 50);
    rect(50, 360, 150, 50);
    fill("black");
    textSize(22);
    text('2.Triple Kick',54, 320, 150, 50);
    text('1.Wing Attack',54, 260, 150, 50);
    text('3.Tri Nova',54, 380, 150, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(370, 540, 300, 100);

    //Character sprite
    fill("purple");
    ellipse(370, 500, 100, 100);
    fill("black");
    ellipse(370, 500, 50, 50);
    }

  }
  //Character 3 health bar, Ann
  if (key === "a") {
    if (character3 === true) {
    character1 = false;
    character2 = false;
    character4 = false;
    fill("red");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(153, 0, 76);
    rect(50, 300, 150, 50);
    rect(50, 240, 150, 50);
    rect(50, 360, 150, 50);
    fill("black")
    textSize(17);
    text('2.Wave Dance',54, 320, 150, 50);
    text('1.Drown',54, 260, 150, 50);
    text('3.Abyssal Depths',54, 380, 150, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(370, 540, 300, 100);

    //Character Sprite
    fill("red");
    ellipse(370, 500, 100, 100);
    fill("pink");
    ellipse(370, 500, 50, 50);
    }
  
  }
  //Character 4 health bar, Yusuke
  if (key === "y") {
    if (character4 === true) {
    character1 = false;
    character2 = false;
    character3 = false;
    fill("blue");
    rect(50, 649, 50, 50,);
    rect(100, 649, 50, 50,);
    rect(150, 649, 50, 50,);
    rect(200, 649, 50, 50,);
    rect(250, 649, 50, 50,);

    //Move selections
    fill(0, 76, 153);
    rect(50, 300, 150, 50);
    rect(50, 240, 150, 50);
    rect(50, 360, 150, 50);
    fill("black");
    textSize(20);
    text('2.Slash',54, 320, 150, 50);
    text('1.Twilight Time',54, 260, 150, 50);
    text('3.Luna Blast',54, 380, 150, 50);

    //Ground sprite
    fill(color(32, 78, 100));
    ellipse(370, 540, 300, 100);

    //Character Sprite
    displayShrievil()
    //fill("Blue");
    //ellipse(370, 500, 100, 100);
    //fill("White");
    //ellipse(370, 500, 50, 50);
    }
  }
    
  //Selecting a move
  //Move 1
  if (key === "z") {
    if (character1 && enemy === true) {
      enemyhealth = enemyhealth - 20;
    }
    else if (character2 && enemy === true) {
      enemyhealth = enemyhealth - 25;
    }
    else if (character3 && enemy === true) {
      enemyhealth = enemyhealth - 15;
    }
    else if (character4 && enemy === true) {
      enemyhealth = enemyhealth - 30;
    }
  }
    
  //Move 2
  if (key === "y") {
    if (character1 && enemy === true) {
      enemyhealth = enemyhealth - 40;
    }
    else if (character2 && enemy === true) {
      enemyhealth = enemyhealth - 50;
    }
    else if (character3 && enemy === true) {
      enemyhealth = enemyhealth - 35;
    }
    else if (character4 && enemy === true) {
      enemyhealth = enemyhealth -45;
    }
  }
    
  //Move3
  if (key === "x") {
    if (character1 && enemy === true) {
      enemyhealth = enemyhealth - 60;
    }
    else if (character2 && enemy === true) {
      enemyhealth = enemyhealth - 70;
    }
    else if (character3 && enemy === true) {
      enemyhealth = enemyhealth - 55;
    }
    else if (character4 && enemy === true) {
      enemyhealth = enemyhealth - 65;
    }
  } 
}