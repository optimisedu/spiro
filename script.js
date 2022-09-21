const CIRCLES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let centerX = width / 2;
let centerY = height / 2;

let radius = 200;
let angle = 0;
let speed = 0.1;
let offset = 50;
let x, y;

let lineWidth = 3;

ctx.translate(centerX, centerY);

const render = () => {
	// ctx.clearRect(-centerX, -centerY, width, height);
	ctx.beginPath();
	ctx.lineWidth = lineWidth;
	ctx.moveTo(x, y);

	for (let i = 0; i < CIRCLES.length; i++) {
		let r = radius / CIRCLES[i];
		x = r * Math.cos(angle * CIRCLES[i]);
		y = r * Math.sin(angle * CIRCLES[i]);
		ctx.arc(x, y, 3, 0, Math.PI * 2);
		ctx.lineTo(x, y);
	}

	ctx.stroke();

	angle += speed;
	requestAnimationFrame(render);
};

render();
