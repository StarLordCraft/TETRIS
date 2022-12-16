class Piece{
    constructor(piece,color){
        ntxpiece = randomPiece(0);
        DrawntxBoard();
        drawntxpiece();
        this.piece = piece;
        this.color = color;

        this.placeN = 0;
        this.activePiece=this.piece[this.placeN];

        this.x = 3;
        this.y = -2;

        this.itgoesy = 0;
        this.itgoesx = 0;

        this.endgame = false;
    
    }
    collision(x,y,futurePiece){
        for(let currentROW=0;currentROW<futurePiece.length;++currentROW){
            for(let currentCOL=0;currentCOL<futurePiece.length;++currentCOL){
                if(!futurePiece[currentROW][currentCOL]) continue;
                let futureX = this.x + currentCOL + x;
                let futureY = this.y + currentROW + y;
                if(futureX < 0 || futureX >= COL || futureY >= ROW)return true;
                if(futureY < 0)continue;
                if(board[futureY][futureX] != defaultColor)return true;
            }
        }
        return false;
    }

    lock(){
        for(let currentROW = 0; currentROW < this.activePiece.length; ++currentROW){
            for(let currentCOL = 0; currentCOL<this.activePiece.length; ++currentCOL){
                if(!this.activePiece[currentROW][currentCOL])continue;

                if(this.y + currentROW <= 0){//game over
                    if(gameOver()){
                        this.endgame = true;

                        game_div.style.display = "none";
                        menu_div.style.display = "block";
                        
                        board = [];
                        nxtpieceboard = [];

                        playagain++;
                    }
                    return;
                }

                board[this.y + currentROW][this.x + currentCOL] = this.color;
            }
        }

        for(let currentROW = 0; currentROW < ROW; ++currentROW){
            let isROWFull = true;
            for(let currentCOL = 0; currentCOL<COL; ++currentCOL){
                const Status_Row = board[currentROW][currentCOL];
                isROWFull = isROWFull && (Status_Row != defaultColor);
                
            }
            if(isROWFull)deleteRow_ADDpoint(currentROW);
        }

        DrawBoard();
    }

    fill(y,color){
        for(let currentROW = 0; currentROW < this.activePiece.length; ++currentROW){
            for(let currentCOL = 0; currentCOL<this.activePiece.length; ++currentCOL){
                if(this.activePiece[currentROW][currentCOL]){
                    DrawSquare(y + currentROW,this.x + currentCOL, color)
                }
            }
        }
    }

    whereitgoes()
    {
        while(!this.collision(0, this.itgoesy, this.activePiece) && this.itgoesy <= ROW)
        {
            this.itgoesy++;
        }

        let colorop = 0;

        if(this.color == '#D70040') colorop = "rgba(215,0,64,0.5)";
        if(this.color == '#98FB98') colorop = "rgba(152,251,152,0.5)";
        if(this.color == '#ADD8E6') colorop = "rgba(173,216,230,0.5)";
        if(this.color == '#9F2B68') colorop = "rgba(159,43,104,0.5)";
        if(this.color == 'cyan') colorop = "rgba(0,255,255,0.5)";
        if(this.color == '#FFFF8F') colorop = "rgba(255,255,143,0.5)";
        if(this.color == '#FF69B4') colorop = "rgba(255,105,180,0.5)";

        this.fill(this.itgoesy + (this.y - 1), colorop);

    }

    undrawitgoes()
    {
        this.fill(this.itgoesy + (this.y - 1), defaultColor);

        this.itgoesy = 1; 
    }

    draw(){ 
        this.fill(this.y,this.color);
    }

    unDraw(){
        this.fill(this.y,defaultColor);
    }
    
    moveLeft(){
        if(!this.collision(-1,0,this.activePiece)){
            this.undrawitgoes();
            this.unDraw();
            this.x--;
            this.draw();
            this.whereitgoes();
        }
    }

    moveRight(){
        if(!this.collision(1,0,this.activePiece)){
            this.undrawitgoes();
            this.unDraw();
            this.x++;
            this.draw();
            this.whereitgoes();
        }
    }
    
    rotate(){
        let nextform = this.piece[(this.placeN + 1) % this.piece.length];
        let rotang = 0;

        if(this.collision(0,0,nextform)){
            rotang = 1;
            if(this.x > COL/2){
                rotang = -1;
            }
        }
        if(!this.collision(rotang,0,nextform)){
            this.undrawitgoes();
            this.unDraw();
            this.x += rotang;
            this.placeN = (this.placeN + 1) % this.piece.length;
            this.activePiece = this.piece[this.placeN];
            this.draw();
            this.whereitgoes();
        }
    }

    moveDown(){
        if(!this.endgame){
        if(!this.collision(0,1,this.activePiece)){
            this.undrawitgoes();
            this.unDraw();
            this.y++;
            this.draw();
            score += 1;
            this.whereitgoes();
            return;
        }
        this.lock();
        if(!this.endgame){piece = newpiece(ntxpiece);}
    }
    }
}
