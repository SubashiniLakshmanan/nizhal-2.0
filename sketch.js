
var newnursery
var gamestate = "menu"

function  preload(){
  nurseryimg = loadImage("nursery.png")
  bambooimg = loadImage("bamboo.png")
  pathwayimg = loadImage("pathway.png")
  saplingimg = loadImage("sapling.png")
  streamimg = loadImage("stream.png")
  thermometerimg = loadImage("thermometer.png")
  saplingimg = loadImage("sapling.png")
  toolshedimg = loadImage("Untitled.png")
  ashokaimg = loadImage("ashoka.png")
  herbalimg = loadImage("herbal.png")
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  newnursery = createSprite(displayWidth/10 +10 , displayWidth/10+10, 150, 150)
  newnursery.addImage("nur",nurseryimg);
  pathway = createSprite(displayWidth/10 +10, displayWidth/10+250, 50, 50)
  pathway.addImage("path",pathwayimg);
  pathway.scale = 0.9;
  toolshed = createSprite(displayWidth/10+10, displayWidth/10+480, 50, 50)
  toolshed.addImage("tool",toolshedimg);
  toolshed.scale = 0.6;
  transformer = createSprite(displayWidth/10+10, displayWidth/10+600, 50, 50)
  transformer.addImage("transformer",thermometerimg);
  transformer.scale = 0.4;
  ashokavanam = createSprite(displayWidth/10+200, displayWidth/10+200, 50, 50)
 ashokavanam.addImage("ashoka",ashokaimg);
 ashokavanam.scale = 0.7;
  herbalgarden = createSprite(displayWidth/10+200, displayWidth/10+400, 50, 50)
  herbalgarden.addImage("herb",herbalimg);
  herbalgarden.scale = 0.7;
  servicegate = createSprite(displayWidth/2, displayWidth/2, 50, 50)
 // newnursery.addImage("nur",nurseryimg);
  maingate = createSprite(displayWidth/2, displayWidth/2, 50, 50)
  //newnursery.addImage("nur",nurseryimg);
  saplings = createSprite(displayWidth/10+200, displayWidth/10+600, 50, 50)
  saplings.addImage("sapling",saplingimg);
  saplings.scale = 0.7;
  bamboo = createSprite(displayWidth/10+800, displayWidth/10+10, 50, 50)
  bamboo.addImage("bamboo",bambooimg);
  bamboo.scale = 0.7;
  stream = createSprite(displayWidth/10+380, displayWidth/10+100, 50, 50)
  stream.addImage("stream",streamimg);
  stream.scale = 1;
  
  //newnursery.addImage("pic",img);

 
}

function draw() {
  
  background("white");  
  drawSprites();
  textSize(15);
  fill("red")
  
    if (mousePressedOver(newnursery) || touches.length>0)
      {
        gamestate="Nursery";
        newnursery.remove();
        touches =[]
    
    }

    if (gamestate === "Nursery"){
      text("water saplings", newnursery.x,newnursery.y)
    }
    if (mousePressedOver(pathway) || touches.length>0)
      {
        gamestate="pathway";
        pathway.remove();
        touches =[]
    
    }

    if (gamestate === "pathway"){
      text("clear pathway", pathway.x,pathway.y)
    }
    if (mousePressedOver(toolshed)|| touches.length>0)
    {
      gamestate="tool";
      toolshed.remove();
      touches =[]
  
  }

  if (gamestate === "tool"){
    text("tools to be used", toolshed.x,toolshed.y)
  }
  if (mousePressedOver(transformer)|| touches.length>0)
      {
        gamestate="transformer";
        transformer.remove();
        touches =[]
    
    }

    if (gamestate === "transformer"){
      text("repair", transformer.x,transformer.y)
    }

    if (mousePressedOver(ashokavanam)|| touches.length>0)
      {
        gamestate="ashokavanam";
        ashokavanam.remove();
        touches =[]
    
    }

    if (gamestate === "ashokavanam"){
      text("ashoka trees needs water", ashokavanam.x,ashokavanam.y)
    }
    if (mousePressedOver(herbalgarden)|| touches.length>0)
      {
        gamestate="herbalgarden";
        herbalgarden.remove();
        touches =[]
    
    }

    if (gamestate === "herbalgarden"){
      text("needed herbs", herbalgarden.x,herbalgarden.y)
    }
    if (mousePressedOver(saplings)|| touches.length>0)
      {
        gamestate="saplings";
        saplings.remove();
        touches =[]
    
    }

    if (gamestate === "saplings"){
      text("saplings needs manure", saplings.x,saplings.y)
    }
    if (mousePressedOver(bamboo)|| touches.length>0)
      {
        gamestate="bamboo";
        bamboo.remove();
        touches =[]
    
    }

    if (gamestate === "bamboo"){
      text("bamboo needs panda", bamboo.x,bamboo.y)
    }

}
