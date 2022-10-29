    const cvs = document.getElementById("tetris");//caçando o canvas
    const ctx = cvs.getContext("2d");

    const scoreElement = document.getElementById("score");
    const speedElement = document.getElementById("speed");


    let playagain = 0;
    let retorno = 0;

    const ROW = 20;
    const COL = 10;
    const nxtCOL = 15;

    const defaultColor = "#000";
    const defaultBorder = "rgba(255,255,255,0.1)";

    let speed = 500;
    let dropStart = Date.now();
    let score = 0;
    let speedpoint = 1;

    let board = [];
    let nxtpieceboard = [];

    let anima = true;

    const PIECES=[
        [Z, '#D70040'],
        [S, '#98FB98'],
        [T, '#ADD8E6'],
        [O, '#9F2B68'],
        [L, 'cyan'],
        [I, '#FFFF8F'],
        [J, '#FF69B4'],
    ];

    let ntxpiece = randomPiece(0);
    let piece = randomPiece(1);

    function game (){
    for(let currentROW = 0; currentROW < 4; ++currentROW){
        nxtpieceboard[currentROW] = [];
        for(let currentCOL = 11; currentCOL < nxtCOL; ++currentCOL){
            nxtpieceboard[currentROW][currentCOL] = defaultColor;
        }
    }

    for(let currentROW = 0; currentROW < ROW; ++currentROW){
        board[currentROW] = [];
        for(let currentCOL = 0; currentCOL<COL; ++currentCOL){
            board[currentROW][currentCOL]= defaultColor;
        }
    }

    DrawBoard();
    DrawntxBoard();
    drawntxpiece();


    drop();
    
    if(game_div.style.display == "block")document.addEventListener("keydown",CONTROL);

    }