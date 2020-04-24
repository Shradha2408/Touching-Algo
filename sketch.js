function setup() {
  createCanvas(800,400);
  switchrect= createSprite(400, 200, 50, 50);
  movingrect= createSprite(400,200,50,50);
}

function draw() {
  movingrect.x= mouseX
  movingrect.y= mouseY
  if(movingrect.x-switchrect.x<movingrect.width/2+switchrect.width/2
    && switchrect.x-movingrect.x<movingrect.width/2+switchrect.width/2 && movingrect.y-switchrect.y<movingrect.height/2+switchrect.height/2
    && switchrect.y-movingrect.y<movingrect.height/2+switchrect.height/2){
    movingrect.shapeColor="blue";
    switchrect.shapeColor="purple";
  }
  else{
    movingrect.shapeColor="yellow";
    switchrect.shapeColor="yellow";
  }
  background(255,255,255);  
  drawSprites();
}