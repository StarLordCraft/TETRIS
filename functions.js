function DrawSquare(y,x,color)
{
    ctx.fillstyle=color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
    if(color==defaultColor){
        ctx.strokeStyle=defaultBorder;
    }
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

function DrawBoard()
{
    for(let currentROW = 0; currentROW < ROW; ++currentROW){
        for(let currentCOL = 0; currentCOL<COL; ++currentCOL){
            currentSquareColor=board[currentROW][currentCOL];
            DrawSquare(currentROW,currentCOL,currentSquareColor);
        }
    }
}

function randomPiece()
{
    const randomPieceNumber = Math.floor(Math.random() * PIECES.length)
    return new Piece(
        PIECES[randomPieceNumber][0],
        PIECES[randomPieceNumber][1]);
}

function drop()
{
    const now = Date.now();
    const delta = now - dropStart;

    if (delta > speed){
        piece.moveDown();
        dropStart = Date.now();
    }
    requestAnimationFrame(drop);
}