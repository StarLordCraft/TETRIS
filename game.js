const cvs = document.getElementById("tetris");//caçando o canvas
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");
const speedElement = document.getElementById("speed");

const ROW = 20;
const COL = 10;
const SQ = 30;
const defaultColor = "#111111";
const defaultBorder = "rgba(255,255,255,0.1)";

let speed = 500;
let dropStart = Date.now();
let score = 0;

let board = [];

for(let currentROW = 0; currentROW < ROW; ++currentROW){
    board[currentROW] = [];
    for(let currentCOL = 0; currentCOL<COL; ++currentCOL){
        board[currentROW][currentCOL]=defaultColor;
    }
}

DrawBoard();

const PIECES=[
    [Z, "rgb(255,0,0)"],
    [S, "rgb(0,255,0)"],
    [T, "rgb(255,255,0)"],
    [O, "rgb(0,0,255)"],
    [L, "rgb(252,15,192)"],
    [I, "rgb(64,224,208)"],
    [J, "rgb(148,0,211)"],
];

let piece = randomPiece();

drop();