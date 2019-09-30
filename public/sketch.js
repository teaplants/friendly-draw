var socket = io();


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(229,227,216);
    socket.on('mouse', newDrawing);
}


function newDrawing(data){

    noStroke();
     fill(255, 130, 200);
    ellipse(data.x, data.y, 5,5);
    
}



 function mouseDragged(){

    var data = {
         x: mouseX,
         y: mouseY
     }
     
     socket.emit ('mouse', data);

     noStroke();
     fill(255, 130, 200);
     ellipse(mouseX, mouseY, 5,5);
     
  
 }

