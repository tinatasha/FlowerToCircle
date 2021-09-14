function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
}

let angle = 0;
let xPos = 0;


function draw() {
  
  
  translate(width/2, height/2)
  
  

  rotate(angle);

  strokeWeight(5);
  stroke(random(256), random(256), random(256))
  point(xPos, 0);
  
  angle += 72.9
  xPos+=1
  
  if(xPos > width/5){
    xPos*=-1;
  }

 
  
}