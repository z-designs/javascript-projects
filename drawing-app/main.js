const canvas = document.getElementById("drawing-board");
const ctx = canvas.getContext("2d");

let drawing = false;
let x = undefined;
let y = undefined;
let size = 10;

ctx.fillStyle = "#333333";

canvas.addEventListener("mousedown", (e) => {
	drawing = true;
	x = e.offsetX;
	y = e.offsetY;
})

canvas.addEventListener("mouseup", (e) => {
	drawing = false;
	x = undefined;
	y = undefined;
	moving = false;
})

canvas.addEventListener("mousemove", (e) => {
	if (drawing) {
		const newX = e.offsetX;
		const newY = e.offsetY;

		ctx.beginPath();
		ctx.arc(newX,newY,10,0,Math.PI * 2);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(newX, newY);
		ctx.strokeStyle = "#333333";
		ctx.lineWidth = 10 * 2;
		ctx.stroke();
		x = newX;
		y = newY;
	}
})