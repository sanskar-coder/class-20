var cat, catImage, catImage1;
var mouse, mouseImage;
var backgroundd,backImage

function preload() {
    //load the images here
   catImage=loadAnimation("images/cat2.png","images/cat3.png");
   catImage1=loadAnimation("images/cat4.png","images/cat4.png");
   mouseImage=loadImage("images/mouse1.png");
   backImage=loadImage("images/garden.png");
   
 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

backgroundd = createSprite (500,400);
backgroundd.addImage(backImage);
backgroundd.scale = 1.11;

cat = createSprite (750,650,10,10);
cat.addAnimation("catRunning",catImage);

cat.scale = 0.2;


mouse = createSprite (150, 650, 10,10);
mouse.addImage(mouseImage);
mouse.scale = 0.1;




}

function draw() {
  //Write condition here to evalute if tom and jerry collide  
    background(225);
    
   
      
    //keyPressed();
    if( mouse.x - cat.x < (cat.width + mouse.width)/2){
        cat.addAnimation("catLastImage",catImage1);
        cat.changeAnimation("catLastImage",catImage1);
        cat.velocityX = 0;
       
    }


    
    drawSprites();
   
    
}


function keyPressed(){
 //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat.velocityX = -5;

cat.changeAnimation("catRunning",catImage);

}

}
