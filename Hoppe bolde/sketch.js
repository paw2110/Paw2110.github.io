function setup() {
    createCanvas(600, 600);
}

let d = Math.floor(Math.random()*101)+51;
let x = Math.floor(Math.random()*((601-d)-1)+d/2);
let y = Math.floor(Math.random()*((601-d)-1)+d/2);
let xSpeed = Math.floor(Math.random()*10)+4;
let ySpeed = Math.floor(Math.random()*10)+4;

let rød = Math.floor(Math.random()*256);
let grøn = Math.floor(Math.random()*256);
let blå = Math.floor(Math.random()*256);

var bold = ["bold1","bold2","bold3","bold4"];
   
  function draw() {
    background(220);
    
    circle(x,y,d);
    fill(rød,grøn,blå);
    if(x>width-d/2||x<0+d/2){
      xSpeed=-xSpeed;
    }
    if(y>height-d/2||y<0+d/2){
      ySpeed=-ySpeed;
    }
    x=x+xSpeed;
    y=y+ySpeed;
  }
  