function setup() {
    createCanvas(600, 600);
    fill(0,0,0) 
  }
  
  function draw() {
    background(220);
    circle(20,20,10)
    circle(580,20,10)
    circle(width/2,mouseY,10)
    line(20,20,300,mouseY)
    line(580,20,300,mouseY)  
  
  }