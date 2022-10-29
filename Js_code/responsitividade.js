const arrow_Left = document.querySelector('.arrow-left').onclick =  () => {if(anima)piece.moveLeft();};
const arrow_Right = document.querySelector('.arrow-right').onclick =  () => {if(anima)piece.moveRight();};
const arrow_Top = document.querySelector('.arrow-top').onclick = () => {if(anima)piece.rotate();};
const arrow_Bottom = document.querySelector('.arrow-bottom').onclick = () => {if(anima)piece.moveDown();};
const engine = document.querySelector('#engine').onclick = () => {
    if(anima){
    anima = false;
    pause_div.style.display = "inline";}
}

let display_Width = window.innerWidth;

const canvas1 = document.getElementById("background_canvas").getContext("2d");
const canvas2 = document.getElementById("background1_canvas").getContext("2d");
const canvas3 = document.getElementById("tetris").getContext("2d");

let squareSize;
let SQ = 30;

    canvas1.canvas.width = display_Width * 0.27;
    canvas2.canvas.width = display_Width * 0.27;

    canvas1.canvas.height = display_Width * 0.42;
    canvas2.canvas.height = display_Width * 0.42;

    squareSize = (canvas1.canvas.width / 20) + 10; 

    canvas3.canvas.width = 450;
    canvas3.canvas.height = 600;
    SQ = 30;

    if(display_Width <= 768){
        canvas1.canvas.height = 300;
        canvas2.canvas.height = 300;
        
        canvas1.canvas.width = 150;
        canvas2.canvas.width = 150;    
    
        SQ = 25;
        squareSize = (canvas1.canvas.width / 20) + 10; 
        
    }
    if(display_Width == 600){
        canvas1.canvas.height = 250;
        canvas2.canvas.height = 250;
        
        canvas1.canvas.width = 80;
        canvas2.canvas.width = 80;    
    
        SQ = 24;
        squareSize = (canvas1.canvas.width / 20) + 10; 
        
    }

window.addEventListener("resize", () => {
    display_Width = window.innerWidth;

    canvas1.canvas.width = display_Width * 0.27;
    canvas2.canvas.width = display_Width * 0.27;

    canvas1.canvas.height = display_Width * 0.42;
    canvas2.canvas.height = display_Width * 0.42;

    squareSize = (canvas1.canvas.width / 20) + 10; 

    canvas3.canvas.width = 450;
    canvas3.canvas.height = 600;
    SQ = 30;

    if(display_Width <= 768){
        canvas1.canvas.height = 300;
        canvas2.canvas.height = 300;
        
        canvas1.canvas.width = 150;
        canvas2.canvas.width = 150;    
    
        SQ = 25;
        squareSize = (canvas1.canvas.width / 20) + 10; 
        
    }
    if(display_Width == 600){
        canvas1.canvas.height = 250;
        canvas2.canvas.height = 250;
        
        canvas1.canvas.width = 80;
        canvas2.canvas.width = 80;    
    
        SQ = 24;
        squareSize = (canvas1.canvas.width / 20) + 10; 
        
    }

})