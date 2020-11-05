function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    line(width/2,0,width/2,height)
    line(0,width/2,width,height/2)
    circle(mouseX,mouseY,75) 
    
    if(mouseX<=width/2&&mouseY<=height/2||mouseX>=width/2&&mouseY>=height/2)
      fill(255,255,255)
    
    if(mouseX<=width/2&&mouseY>=height/2||mouseX>=width/2&&mouseY<=height/2)
      fill(255,0,0)
    
  }