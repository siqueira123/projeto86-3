var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
fabric.Image.fromURL('imagenDeAniversario.png', function(Img) {
    blockImageObject = Img;
    blockImageObject.scaleToWidth(400);
    blockImageObject.scaleToHeight(400);
    blockImageObject.set({
    top:0,
    left:80
    });
   canvas.add(blockImageObject);
    });
    
	
}

function playSound(){
	x.play();
}
