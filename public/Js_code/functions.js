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
    ctf.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
    ctf.strokeStyle = defaultBorder;
    ctf.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
}

function drawcanvas_board(ctf,boardf){
    for(let currentROW = 0; currentROW < ROW; ++currentROW){
        for(let currentCOL = 0; currentCOL < COL; ++currentCOL){
            let currentSquareColor = boardf[currentROW][currentCOL];
            DrawcanvasSquare(currentROW,currentCOL,currentSquareColor,ctf);
        }
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