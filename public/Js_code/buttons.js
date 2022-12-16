//basicamente as divs e os funcionamentos dos botões
const sound_menu = document.getElementById("menu_sound");
const sound_click_button = document.getElementById("click_sound");
const sound_ingame = document.getElementById("ingame_sound");
const sound_crash_line = document.getElementById("crash_line_sound");

const menu_div = document.getElementById("d1");
const btn_about_main_menu = document.getElementById("btn_about_main_menu");
const btn_htp_main_menu = document.getElementById("btn_htp_main_menu");

const about_div = document.getElementById("d2");
const btn_about = document.getElementById("sobre");

const how_to_play_div = document.getElementById("d3");
const btn_htp = document.getElementById("como_jogar");

const game_div = document.getElementById("d4");
const btn_game = document.getElementById("jogar");

const pause_div = document.getElementById("d5");
const btn_restart = document.getElementById("restart");
const btn_back_to_menu = document.getElementById("game_to_menu");
const btn_continue = document.getElementById("continue");

const game_over_div = document.getElementById("d6");
const btn_jogar_novamente = document.getElementById("jogar_novamente");
const btn_voltar = document.getElementById("voltar")

sound_menu.play();

btn_about.onclick = function () {
    sound_click_button.play();
    menu_div.style.display = "none";
    about_div.style.display = "block";
}

btn_htp.onclick = function () {
    menu_div.style.display = "none";
    how_to_play_div.style.display = "block";
    sound_click_button.play();
}

btn_game.onclick = function () {
    sound_click_button.play();
    menu_div.style.display = "none";
    game_div.style.display = "block";
    sound_menu.pause();
    sound_ingame.play();
    if(!playagain){game();}
    else{
        resetGame();
        piece = newpiece(ntxpiece);
        drop();
    }
}

btn_about_main_menu.onclick = function () {
sound_click_button.play();
about_div.style.display = "none";
menu_div.style.display = "flex";
}
btn_htp_main_menu.onclick = function () {
sound_click_button.play();
how_to_play_div.style.display = "none";
menu_div.style.display = "flex";
}

btn_restart.onclick = function() {
    sound_click_button.play();
    playagain++;
    sound_click_button.play();
    pause_div.style.display = "none";
    resetGame();
    piece = newpiece(ntxpiece);
    drop();
}
btn_back_to_menu.onclick = function () {
    sound_click_button.play();
    pause_div.style.display = "none";
    game_div.style.display = "none";
    menu_div.style.display = "flex";
    sound_ingame.pause();
    sound_menu.play();
    playagain++;
    piece.endgame = true;
}
btn_continue.onclick = function () {
    sound_click_button.play();
    pause_div.style.display = "none";
    anima = true;
    drop();
}
btn_jogar_novamente.onclick = function (){
    sound_click_button.play();
    game_over_div.style.display = "none";
    resetGame();
    piece = newpiece(ntxpiece);
    drop();
}
btn_voltar.onclick = function (){
    sound_click_button.play();
    game_over_div.style.display = "none";
    game_div.style.display = "none";
    menu_div.style.display = "flex";
    sound_ingame.pause();
    sound_menu.play();
    retorno = true;
}
