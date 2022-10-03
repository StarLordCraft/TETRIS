class Piece{
    constructor(piece,color){
        this.piece = piece;
        this.color = color;

        this.placeN=0;
        this.activePiece=this.piece[this.placeN];

        this.x = 3;
        this.y = -2;
    
    }

    fill(color){
        for(let currentROW = 0; currentROW < this.activePiece.length; ++currentROW){
            for(let currentCOL = 0; currentCOL<this.activePiece.length; ++currentCOL){
                if(this.activePiece[currentROW][currentCOL]){
                    DrawSquare(this.y + currentROW,this.x + currentCOL,color)
                }
            }
        }
    }

    draw(){ 
        this.fill(this.color);
    }

    unDraw(){
        this.fill(defaultColor);
    }

    moveDown(){
        let future_y=this.y++;
        if(future_y==ROW)return;
        this.unDraw();
        this.y++;
        this.draw();
        
    }
}