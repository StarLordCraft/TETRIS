function changeSoundState(){
    const menuSound = document.getElementById('menu_sound');
    if(muted){
        soundState.classList.remove('sound-on');
        soundState.classList.add('sound-off');

        menuSound.muted = false;

        muted = false;
    }else{
        soundState.classList.remove('sound-off');
        soundState.classList.add('sound-on');

        menuSound.muted = true;

        muted = true;
    }
}

function DrawcanvasSquare(y,x,color,ctf)
{
    ctf.fillStyle = color;
    ctf.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
    ctf.strokeStyle = "rgba(255,255,255,0.1)";
    ctf.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
}

function drawcanvas_board(ctf,boardf){
    for(let currentROW = 0; currentROW < 20; ++currentROW){
        for(let currentCOL = 0; currentCOL < 10; ++currentCOL){
            let currentSquareColor = boardf[currentROW][currentCOL];
            DrawcanvasSquare(currentROW,currentCOL,currentSquareColor,ctf);
        }
    }
}

function resetback_canvas() {
    for(let currentROW = 0; currentROW < 20; ++currentROW){
        canvas_board[currentROW] = [];
        for(let currentCOL = 0; currentCOL < 10; ++currentCOL){
            canvas_board[currentROW][currentCOL] = defaultColor;
        }
    }
    
    for(let currentROW = 0; currentROW < 20; ++currentROW){
        canvas_board1[currentROW] = [];
        for(let currentCOL = 0; currentCOL < 10; ++currentCOL){
            canvas_board1[currentROW][currentCOL] = defaultColor;
        }
    }
    canvas_board[19][9] = '#FFFF8F'; canvas_board[19][8] = '#FFFF8F'; canvas_board[19][7] = '#FFFF8F'; canvas_board[19][6] = '#FFFF8F';
    canvas_board[19][0] = '#FFFF8F'; canvas_board[19][1] = '#FFFF8F'; canvas_board[19][2] = '#FFFF8F'; canvas_board[19][3] = '#FFFF8F';
    canvas_board[19][4] = '#9F2B68'; canvas_board[19][5] = '#9F2B68'; canvas_board[18][4] = '#9F2B68'; canvas_board[18][5] = '#9F2B68';
    canvas_board[18][2] = '#98FB98';canvas_board[18][3] = '#98FB98'; canvas_board[17][3] = '#98FB98'; canvas_board[17][4] = '#98FB98';
    canvas_board[17][5] = '#D70040'; canvas_board[17][6] = '#D70040'; canvas_board[18][6] = '#D70040'; canvas_board[18][7] = '#D70040';
    canvas_board[18][9] = '#FFFF8F'; canvas_board[17][9] = '#FFFF8F'; canvas_board[16][9] = '#FFFF8F'; canvas_board[15][9] = '#FFFF8F';
    canvas_board[18][0] = '#FFFF8F'; canvas_board[17][0] = '#FFFF8F'; canvas_board[16][0] = '#FFFF8F'; canvas_board[15][0] = '#FFFF8F';
    canvas_board[18][1] = '#ADD8E6'; canvas_board[17][1] = '#ADD8E6';  canvas_board[17][2] = '#ADD8E6'; canvas_board[16][1] = '#ADD8E6';
    canvas_board[18][1] = '#ADD8E6'; canvas_board[17][1] = '#ADD8E6';  canvas_board[17][2] = '#ADD8E6'; canvas_board[16][1] = '#ADD8E6';
    canvas_board[18][8] = '#ADD8E6'; canvas_board[17][8] = '#ADD8E6';  canvas_board[17][7] = '#ADD8E6'; canvas_board[16][8] = '#ADD8E6';
    canvas_board[15][1] = '#D70040'; canvas_board[15][2] = '#D70040'; canvas_board[16][3] = '#D70040'; canvas_board[16][2] = '#D70040';
    canvas_board[16][7] = '#FF69B4'; canvas_board[16][6] = '#FF69B4'; canvas_board[16][5] = '#FF69B4';
    canvas_board[15][8] = 'cyan'; canvas_board[15][7] = 'cyan'; canvas_board[15][6] = 'cyan';

    canvas_board1[19][9] = '#FFFF8F'; canvas_board1[19][8] = '#FFFF8F'; canvas_board1[19][7] = '#FFFF8F'; canvas_board1[19][6] = '#FFFF8F';
    canvas_board1[19][0] = '#FFFF8F'; canvas_board1[19][1] = '#FFFF8F'; canvas_board1[19][2] = '#FFFF8F'; canvas_board1[19][3] = '#FFFF8F';
    canvas_board1[19][4] = '#9F2B68'; canvas_board1[19][5] = '#9F2B68'; canvas_board1[18][4] = '#9F2B68'; canvas_board1[18][5] = '#9F2B68';
    canvas_board1[18][2] = '#98FB98';canvas_board1[18][3] = '#98FB98'; canvas_board1[17][3] = '#98FB98'; canvas_board1[17][4] = '#98FB98';
    canvas_board1[17][5] = '#D70040'; canvas_board1[17][6] = '#D70040'; canvas_board1[18][6] = '#D70040'; canvas_board1[18][7] = '#D70040';
    canvas_board1[18][9] = '#FFFF8F'; canvas_board1[17][9] = '#FFFF8F'; canvas_board1[16][9] = '#FFFF8F'; canvas_board1[15][9] = '#FFFF8F';
    canvas_board1[18][0] = '#FFFF8F'; canvas_board1[17][0] = '#FFFF8F'; canvas_board1[16][0] = '#FFFF8F'; canvas_board1[15][0] = '#FFFF8F';
    canvas_board1[18][1] = '#ADD8E6'; canvas_board1[17][1] = '#ADD8E6';  canvas_board1[17][2] = '#ADD8E6'; canvas_board1[16][1] = '#ADD8E6';
    canvas_board1[18][1] = '#ADD8E6'; canvas_board1[17][1] = '#ADD8E6';  canvas_board1[17][2] = '#ADD8E6'; canvas_board1[16][1] = '#ADD8E6';
    canvas_board1[18][8] = '#ADD8E6'; canvas_board1[17][8] = '#ADD8E6';  canvas_board1[17][7] = '#ADD8E6'; canvas_board1[16][8] = '#ADD8E6';
    canvas_board1[15][1] = '#D70040'; canvas_board1[15][2] = '#D70040'; canvas_board1[16][3] = '#D70040'; canvas_board1[16][2] = '#D70040';
    canvas_board1[16][7] = '#FF69B4'; canvas_board1[16][6] = '#FF69B4'; canvas_board1[16][5] = '#FF69B4';
    canvas_board1[15][8] = 'cyan'; canvas_board1[15][7] = 'cyan'; canvas_board1[15][6] = 'cyan';

    anima_delete = false;
}

function back_fill(color,ctf){
    for(let currentROW = 0; currentROW < back_piece.length; ++currentROW){
        for(let currentCOL = 0; currentCOL < back_piece.length; ++currentCOL){
            if(back_piece[currentROW][currentCOL]){
                DrawcanvasSquare(back_y + currentROW, back_x + currentCOL, color, ctf)
            }
        }
    }
}


function back_delete_canvas(){
    for(let currentROW = 15; currentROW < 20; ++currentROW){
        for(let currentCOL = 0; currentCOL < 10; ++currentCOL){
            setTimeout(function()
                {canvas_board[currentROW][currentCOL] = defaultColor;
                drawcanvas_board(canvas1, canvas_board);
            }, 200);
        }
    }
}

function back_delete_canvas1(){
    for(let currentROW = 15; currentROW < 20; ++currentROW){
        for(let currentCOL = 0; currentCOL < 10; ++currentCOL){
            setTimeout(function() {
                canvas_board1[currentROW][currentCOL] = defaultColor;
                drawcanvas_board(canvas2,canvas_board1);
            }, 200);
        }
    }
}

function back_drop()
{
    const now = Date.now();
    const delta = now - back_dropStart;

    if (delta > back_time){
        back_fill(defaultColor, canvas1);
        back_fill(defaultColor, canvas2);
        if(back_y < 14){
            back_y++;
            back_fill('cyan', canvas1);
            back_fill('#FF69B4', canvas2);
            back_dropStart = Date.now();
        }
    }
    if(back_y == 14){
        anima_delete = true;
        back_delete_canvas();
        back_delete_canvas1();
    }
    if(!anima_delete)requestAnimationFrame(back_drop);
    
    if(anima_delete){
        setTimeout(function (){
        resetback_canvas();
        drawcanvas_board(canvas1, canvas_board);
        drawcanvas_board(canvas2, canvas_board1);
        back_y = 0;
        requestAnimationFrame(back_drop);
    },2000)
}
}

const soundState = document.getElementById('sound');

let muted = true;

soundState.addEventListener('click', changeSoundState);

const defaultColor = '#000';
const canvas1 = document.getElementById('background_canvas').getContext("2d");
const canvas2 = document.getElementById('background1_canvas').getContext("2d");
const back_time = 500;
const back_x = 3;

const back_piece=[
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
];

let back_y = 0;
let squareSize = (canvas1.canvas.width / 20) + 10;
let back_dropStart = Date.now();
let displayWidth = document.querySelector('.background:nth-child(1)').clientWidth;
let anima_delete = false;
let canvas_board = [];
let canvas_board1 = [];

canvas1.canvas.width = displayWidth;
canvas2.canvas.width = displayWidth;

resetback_canvas();

drawcanvas_board(canvas1, canvas_board);
drawcanvas_board(canvas2,canvas_board1);

back_drop();

