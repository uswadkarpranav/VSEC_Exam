const canvas = document.getElementById("paint");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.onmousedown = function(e){
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
};
canvas.onmousemove = function(e){
    if(!drawing) return;

    ctx.strokeStyle = document.getElementById("color").value;
    ctx.lineWidth = document.getElementById("size").value;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.lineTo(e.offsetX, e.offsetY);//continue line flow
    ctx.stroke();//Actually draws on the canvas

};
canvas.onmouseup = () => drawing = false;//[()=>] instead of [function()]
canvas.onmouseleave = function() {
     drawing = false;
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}