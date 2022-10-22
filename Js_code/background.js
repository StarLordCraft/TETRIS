const back_canvas = document.getElementById("background_canvas");
const ctx_canvas = back_canvas.getContext("2d");

const back_canvas1 = document.getElementById("background1_canvas");
const ctx_canvas1 = back_canvas1.getContext("2d");

let canvas_board = [];
let canvas_board1 = [];

const back_time = 500;
let back_dropStart = Date.now();

let anima_delete = false;

const back_piece=[
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
];

const back_x = 3;
let back_y = 0;

resetback_canvas();

drawcanvas_board(ctx_canvas,canvas_board);
drawcanvas_board(ctx_canvas1,canvas_board1);

back_drop();


