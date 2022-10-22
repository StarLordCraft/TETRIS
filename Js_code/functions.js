function DrawSquare(y,x,color)
{
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
    if(color==defaultColor){
        ctx.strokeStyle = defaultBorder;
    }
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

function DrawcanvasSquare(y,x,color,ctf)
{
    ctf.fillStyle = color;
    ctf.fillRect(x * SQ, y * SQ, SQ, SQ);
    ctf.strokeStyle = defaultBorder;
    ctf.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

function drawcanvas_board(ctf,boardf){
    for(let currentROW = 0; currentROW < ROW; ++currentROW){
        for(let currentCOL = 0; currentCOL < COL; ++currentCOL){
            let currentSquareColor = boardf[currentROW][currentCOL];
            DrawcanvasSquare(currentROW,currentCOL,currentSquareColor,ctf);
        }
    }
}

function resetback_canvas() {
    for(let currentROW = 0; currentROW < ROW; ++currentROW){
        canvas_board[currentROW] = [];
        for(let currentCOL = 0; currentCOL < COL; ++currentCOL){
            canvas_board[currentROW][currentCOL] = defaultColor;
        }
    }
    
    for(let currentROW = 0; currentROW < ROW; ++currentROW){
        canvas_board1[currentROW] = [];
        for(let currentCOL = 0; currentCOL < COL; ++currentCOL){
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
    for(let currentROW = 15; currentROW < ROW; ++currentROW){
        for(let currentCOL = 0; currentCOL < COL; ++currentCOL){
            setTimeout(function()
                {canvas_board[currentROW][currentCOL] = defaultColor;
                drawcanvas_board(ctx_canvas,canvas_board);
            }, 200);
        }
    }
}

function back_delete_canvas1(){
    for(let currentROW = 15; currentROW < ROW; ++currentROW){
        for(let currentCOL = 0; currentCOL < COL; ++currentCOL){
            setTimeout(function() {
                canvas_board1[currentROW][currentCOL] = defaultColor;
                drawcanvas_board(ctx_canvas1,canvas_board1);
            }, 200);
        }
    }
}

function back_drop()
{
    const now = Date.now();
    const delta = now - back_dropStart;

    if (delta > back_time){
        back_fill(defaultColor, ctx_canvas);
        back_fill(defaultColor, ctx_canvas1);
        if(back_y < 14){
            back_y++;
            back_fill('cyan', ctx_canvas);
            back_fill('#FF69B4', ctx_canvas1);
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
        drawcanvas_board(ctx_canvas,canvas_board);
        drawcanvas_board(ctx_canvas1,canvas_board1);
        back_y = 0;
        requestAnimationFrame(back_drop);
    },2000)
}
}


function DrawntxBoard()
{
    for(let currentROW = 0; currentROW < 4; ++currentROW){
        for(let currentCOL = 11; currentCOL < nxtCOL; ++currentCOL){
            let currentSquareColor = defaultColor;
            DrawSquare(currentROW,currentCOL,currentSquareColor);
        }
    }
}

function DrawBoard()
{
    for(let currentROW = 0; currentROW < ROW; ++currentROW){
        for(let currentCOL = 0; currentCOL < COL; ++currentCOL){
            let currentSquareColor = board[currentROW][currentCOL];
            DrawSquare(currentROW,currentCOL,currentSquareColor);
        }
    }
    scoreElement.innerHTML = score;
    speedElement.innerHTML = speedpoint;
}

function randomPiece(arg=0)
{
    const randomPieceNumber = Math.floor(Math.random() * PIECES.length)
    if(arg){return new Piece(
        PIECES[randomPieceNumber][0],
        PIECES[randomPieceNumber][1]);
    }

    for(let currentROW = 0; currentROW < 4; ++currentROW){
        nxtpieceboard[currentROW] = [];
        for(let currentCOL = 0; currentCOL < 4; ++currentCOL){
            nxtpieceboard[currentROW][currentCOL] = defaultColor;
        }
    }

    return PIECES[randomPieceNumber];
}

function newpiece(array)
{
    return new Piece(
        array[0],
        array[1]);
}

function drop()
{
    if(!piece.endgame){
        const now = Date.now();
        const delta = now - dropStart;

        if (delta > speed){
            piece.moveDown();
            dropStart = Date.now();
        }
        if(anima)requestAnimationFrame(drop);
    }
}

function drawntxpiece(){
    for(let currentROW = 0; currentROW < 4; ++currentROW){
        if(currentROW >= ntxpiece[0][0].length)break;
        for(let currentCOL = 11; currentCOL < 15; ++currentCOL){
            let indexer = currentCOL - 11;

            if(indexer >= ntxpiece[0][0][currentROW].length)continue;
            if(ntxpiece[0][0][currentROW][indexer]){
                DrawSquare(currentROW, currentCOL, ntxpiece[1])
            }
        }
    }
}

function CONTROL(event){
    const moveFunctions={
        ArrowLeft(){
            if(anima)piece.moveLeft();
        },
        ArrowRight(){
            if(anima)piece.moveRight();
        },
        ArrowUp(){
            if(anima)piece.rotate();
        },
        ArrowDown(){
            if(anima)piece.moveDown();
        },
        Space(){
            anima = false;
            pause_div.style.display = "inline";
        }
    };
    const movePiece = moveFunctions[event.code];
    movePiece();
}

function removeRow(rowToRemove, ColToRemove){
    board[rowToRemove][ColToRemove] = board[--rowToRemove][ColToRemove];
}

function deleteRow_ADDpoint(row){
    for(let y = row; y > 1; --y){
        for(let currentCOL = 0; currentCOL < COL; ++currentCOL){
            removeRow(y,currentCOL);
        }
    }
    sound_crash_line.play();
    for(let currentCOL = 0; currentCOL < COL; ++currentCOL){
        board[0][currentCOL] = defaultColor;
    }
    score += 10 * speedpoint;
    ++speedpoint;
    if(speed > 100)speed-=20;
}

function resetGame(){
    retorno = 0;
    anima = true;
    speed = 500;
    dropStart = Date.now();
    score = 0;
    speedpoint=1;

    board = [];
    nxtpieceboard = [];

    for(let currentROW = 0; currentROW < ROW; ++currentROW){
        board[currentROW] = [];
        for(let currentCOL = 0; currentCOL<COL; ++currentCOL){
            board[currentROW][currentCOL]= defaultColor;
        }
    }

    DrawBoard();
}

function gameOver(){
    anima = false;
    const sound_game_over = document.getElementById("game_oversound");
    sound_game_over.play();
    game_over_div.style.display = "inline";
    
    return retorno;
}