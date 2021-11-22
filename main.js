var mouseevent="empty";
var l_mousex, l_mousey;
canvas=document.getElementById("Canvas1");
ctx=canvas.getContext("2d");

color="#000000";
width=10;

canvas.addEventListener("mousedown",mymousedown); 

function mymousedown(e) {
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseevent="mousedown";
    console.log(mouseevent);
}

canvas.addEventListener("mousemove",mymousemove); 

function mymousemove(e) {
    c_mousex=e.clientX-canvas.offsetLeft;
    c_mousey=e.clientY-canvas.offsetTop;

    if (mouseevent=="mousedown"); {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("last");
        console.log(l_mousex+","+l_mousey);
        ctx.moveTo(l_mousex, l_mousey);

        console.log("current");
        console.log(c_mousex+","+c_mousey);
        ctx.lineTo(c_mousex, c_mousey);
        ctx.stroke();
    }
    l_mousex=c_mousex;
    l_mousey=c_mousey;
}

canvas.addEventListener("mouseup",mymouseup); 

function mymouseup(e) {
    mouseevent="mouseup"
    console.log(mouseevent);
}

canvas.addEventListener("mouseleave",mymouseleave); 

function mymouseleave(e) {
    mouseevent="mouseleave"
    console.log(mouseevent);
}