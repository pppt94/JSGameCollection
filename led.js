var displayBase = document.getElementById("displayBase");
var display = document.getElementById("display");
var mat = new Array();

function newLine(){
  var line = new Array();
  for (var i = 0; i < 37; i++){
    var led = document.createElement("div");
    led.className = "led off";
    display.appendChild(led);
    line[i] = led;
  }
  return line;
}
for (var i = 0; i < 7; i++)
  mat[i] = newLine();

function write (arr) {
  var i = 0;
  while (i < arr.length){
    mat[arr[i++]][arr[i++]].className = "led";
  }
}

var menu = new Array(0,0,0,1,0,2,0,3,0,6,0,7,0,13,0,14,0,18,0,19,0,23,0,25,0,28,0,29,0,30,0,31,0,34,0,35,
                    1,3,1,5,1,8,1,12,1,15,1,17,1,20,1,22,1,24,1,26,1,28,1,33,1,36,
                    2,3,2,5,2,12,2,17,2,20,2,22,2,26,2,28,2,33,
                    3,3,3,6,3,7,3,12,3,14,3,15,3,17,3,18,3,19,3,20,3,22,3,26,3,28,3,29,3,30,3,34,3,35,
                    4,0,4,3,4,8,4,12,4,15,4,17,4,20,4,22,4,26,4,28,4,36,
                    5,0,5,3,5,5,5,8,5,12,5,15,5,17,5,20,5,22,5,26,5,28,5,33,5,36,
                    6,1,6,2,6,6,6,7,6,13,6,14,6,17,6,20,6,22,6,26,6,28,6,29,6,30,6,31,6,34,6,35);
var tetris = new Array(0,4,0,5,0,6,0,7,0,8,0,10,0,11,0,12,0,13,0,15,0,16,0,17,0,18,0,19,0,21,0,22,0,23,0,24,0,26,0,29,0,30,
                       1,6,1,10,1,17,1,21,1,24,1,26,1,28,1,31,
                       2,6,2,10,2,17,2,21,2,24,2,26,2,28,
                       3,6,3,10,3,11,3,12,3,17,3,21,3,22,3,23,3,24,3,26,3,29,3,30,
                       4,6,4,10,4,17,4,21,4,23,4,26,4,31,
                       5,6,5,10,5,17,5,21,5,24,5,26,5,28,5,31,
                       6,6,6,10,6,11,6,12,6,13,6,17,6,21,6,24,6,26,6,29,6,30);

var snaker = new Array(0,7,0,8,0,11,0,14,0,17,0,18,0,21,0,24,0,26,0,27,0,28,0,29,
                      1,6,1,9,1,11,1,12,1,14,1,16,1,19,1,21,1,24,1,26,
                      2,6,2,11,2,12,2,14,2,16,2,19,2,21,2,23,2,26,
                      3,7,3,8,3,11,3,12,3,13,3,14,3,16,3,17,3,18,3,19,3,21,3,22,3,26,3,27,3,28,
                      4,9,4,11,4,13,4,14,4,16,4,19,4,21,4,23,4,26,
                      5,6,5,9,5,11,5,13,5,14,5,16,5,19,5,21,5,24,5,26,
                      6,7,6,8,6,11,6,14,6,16,6,19,6,21,6,24,6,26,6,27,6,28,6,29);

var breakout = new Array(0,4,0,5,0,6,0,7,0,10,0,11,0,14,0,18,0,22,0,23,0,27,0,29,0,30,0,31,
						 1,7,1,9,1,12,1,14,1,15,1,18,1,21,1,24,1,27,1,29,1,32,
						 2,7,2,9,2,14,2,15,2,18,2,20,2,25,2,27,2,29,2,33,
						 3,7,3,10,3,11,3,14,3,16,3,18,3,20,3,25,3,27,3,29,3,33,
						 4,4,4,7,4,12,4,14,4,17,4,18,4,20,4,25,4,27,4,29,4,33,
						 5,4,5,7,5,9,5,12,5,14,5,17,5,18,5,21,5,24,5,27,5,29,5,32,
						 6,5,6,6,6,10,6,11,6,14,6,18,6,22,6,23,6,27,6,29,6,30,6,31);

var mastermind = new Array(0,4,0,5,0,6,0,7,0,10,0,11,0,16,0,18,0,21,0,23,0,27,0,29,0,30,0,31,
						   1,7,1,9,1,12,1,15,1,17,1,19,1,21,1,23,1,24,1,27,1,29,1,32,
						   2,7,2,9,2,15,2,19,2,21,2,23,2,24,2,27,2,29,2,33,
						   3,7,3,10,3,11,3,15,3,19,3,21,3,23,3,25,3,27,3,29,3,33,
						   4,4,4,7,4,12,4,15,4,19,4,21,4,23,4,26,4,27,4,29,4,33,
						   5,4,5,7,5,9,5,12,5,15,5,19,5,21,5,23,5,26,5,27,5,29,5,32,
						   6,5,6,6,6,10,6,11,6,15,6,19,6,21,6,23,6,27,6,29,6,30,6,31); 
