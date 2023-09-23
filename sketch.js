var bg,form,system,code,scan;
var score=0;

function preload() {
  bg = loadImage("./assets/Background.jpg");
}

function setup() {
  createCanvas(1000,500);
  scan = new Scan();
  system = new System();
}

function draw() {
  background(bg1);
  questions1();
  if(score == 3){
    questions2();
  }
  textSize(40);
  fill("black");
  text("Score: " + score, 650, 50);

  scan.display();

  drawSprites()
}