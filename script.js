

// starting time for a reaction 

var start = new Date().getTime();

// to generate a random color

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// This is to move the box,change the color and size on clicking
function move() {
    var left;
    var top;
    var right;
    var bottom;
    var wh;

    left = Math.random() * 300;
    top = Math.random() * 300;
    right = Math.random() * 300;
    bottom = Math.random() * 300;
    wh = (Math.random() * 400 + 100);

    document.getElementById("RectangleShape").style.left = left + "px";
    document.getElementById("RectangleShape").style.right = right + "px";
    document.getElementById("RectangleShape").style.bottom = bottom + "px";
    document.getElementById("RectangleShape").style.top = top + "px";
    document.getElementById("RectangleShape").style.width = wh + "px";
    document.getElementById("RectangleShape").style.height = wh + "px";
    document.getElementById("RectangleShape").style.backgroundColor = getRandomColor();


    start = new Date().getTime();

}
move();



// To change the color on clicking the rectange shape

document.getElementById("RectangleShape").onclick = function () {

    var end = new Date().getTime();

    var reactionTime = (end - start) / 1000 + " Seconds";  // to get reaction time
    alert("Reaction Time = " +  reactionTime);
    move();

}



