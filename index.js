const { Rectangle, ORANGE, GRAY, BLACK, RED, WHITE } = require('raylib')
const r = require('raylib')
const screenWidth = 1080
const screenHeight = 611

//setup
var xpos=screenWidth/2;
var ypos=screenHeight/2;
var xvel=0;
var yvel=0;
const size=25;
const friction=0.94;

r.InitWindow(screenWidth, screenHeight, "this is a bad game and you should not be playing it");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(BLACK)
   
    //friction scripts
    var xvel = xvel * friction;
    var yvel = yvel * friction;
    
    //physics
    var xpos = xvel + xpos;
    var ypos = yvel + ypos;

    //input detection
    if (r.IsKeyDown(r.KEY_D)) {
        xvel++;
    }
    if (r.IsKeyDown(r.KEY_A)) {
        xvel--;
    }
    if (r.IsKeyDown(r.KEY_W)) {
        yvel--;
    }
    if (r.IsKeyDown(r.KEY_S)) {
        yvel++;
    }

    //collision
    if (xpos < 0) {
        var xpos=0;
        var xvel=0;
    } 
    if (xpos > screenWidth-size) {
        var xpos=screenWidth-size;
        var xvel=0;
    } 
    if (ypos < 0) {
        var ypos=0;
        var yvel=0;
    } 
    if (ypos > screenHeight-size) {
        var ypos=screenHeight-size;
        var yvel=0;
    } 

    r.DrawRectangle(xpos, ypos, size, size, WHITE)
    r.EndDrawing()
}

console.log("kinda cringe bro");

r.CloseWindow()
