var drawingA=[];
var currentPathA=[];
var drawing=false;

var rStroke;
var x,y;
var weight;
var colorfill= [];

function setup(){
    var canvas=createCanvas(1200,600);
}

function mousePressed(){
    startPath();
}

function mouseReleased(){
    endPath();
    return true;
}  
    
function startPath() {
    drawing = true;
    drawingA.push(currentPathA);
}
      
function endPath() {
    drawing = false;
    return true;
}

function draw(){
    background(100);
    rStroke=floor(map(mouseX,10,1200,10,250)); 
    weight=floor(random(1,4));
    colorfill=[mouseX,mouseY,(mouseX+mouseY/2)];
    textSize(20);
    text("Press and Move the Mouse ...",500,570);

           
    if (x==undefined) {
        x=1200;
    }else if(x<0){
        x=0;
    }
    
    if (y>height) {
        y=600;
    }else if(y<0){
        y=0;
    }
   

    
    if (drawing) {
        var point = {
          x: mouseX,
          y: mouseY,
          rStroke:rStroke,
          weight:weight,
          colorfill:colorfill
        }
        currentPathA.push(point);
      }  
    
    if (mouseReleased){
         
        for (var i = 0; i < currentPathA.length-1; i++) {
            strokeWeight(currentPathA[i].weight); 
            stroke(currentPathA[i].rStroke,12,14);
            fill(currentPathA[i].colorfill);
            ellipse (currentPathA[i].x, currentPathA[i].y,7,7);   
        }
    }

    
}