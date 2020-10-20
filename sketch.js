let img;
function preload() {
  img = loadImage('download.png');
}
function setup() {
  createCanvas(200, 200);
  image(img, 0, 0, 200, 200);
  
  
}

function draw() {
  
  //ellipse(200, 200, 55, 55);
  fill(mouseX, mouseY, mouseX)
}