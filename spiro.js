const CIRCLES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let centerX = width / 2;
let centerY = height / 2;

let radius = 200;
let angle = 0;
let speed = 0.01;
let offset = 50;

let x, y, dx, dy;

const alpha = '0.05';
const alphaCog = '0.03';
function r() {
	return Math.floor(Math.random() * 255);
}

let ballColor = 'rgba(' + r() + ',' + r() + ',' + r() + ',' + alpha + ')';
let cogColor = 'rgba(' + r() + ',' + r() + ',' + r() + ',' + alphaCog + ')';

console.log(ballColor, cogColor);

ctx.translate(centerX, centerY);
ctx.lineWidth = 3;

class Ball {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.strokeStyle = this.color;
		ctx.stroke();
		ctx.closePath();
	}
}

class Cog {
	constructor(dx, dy, radius, color) {
		this.dx = x;
		this.dy = y;
		this.radius = radius;
		this.color = color;
	}
	init() {
		ctx.beginPath();
		ctx.arc(this.dx, this.dy, this.radius, 0, Math.PI * 2, false);
		ctx.strokeStyle = this.color;
		ctx.stroke();
		ctx.closePath();
	}
}

const render = () => {
	// ctx.clearRect(-centerX, -centerY, width, height);
	ctx.beginPath();
	ctx.moveTo(x, y);
	CIRCLES.forEach((circle, index) => {
		angle += speed % 4;
		for (let i = 0; i < CIRCLES.length; i++) {
			if (i % 4 == 0) {
				let r = radius / CIRCLES[index];
				angle += speed;
				x = Math.cos(angle) * (radius + offset * i);
				x = r * Math.cos(angle * CIRCLES[i]);
				y = r * Math.sin(angle * CIRCLES[i]);
				new Ball(x, y, 50, ballColor).draw();
				ctx.arc(x, y, 25, 0, Math.PI * 2);
				ctx.lineTo(x, y);
			} else {
				let r = radius / CIRCLES[index];
				angle += speed;
				x = Math.cos(angle) * (radius - offset * index);
				x = r * Math.sin(angle * CIRCLES[index]);
				// y = r * Math.cos(angle * CIRCLES[i]);
				ctx.arc(dx, dy, 60, 0, Math.PI * 2);
				new Cog(dx, dy, 26, cogColor).init();
				ctx.lineTo(dx, dy);
			}
		}
	});
	ctx.stroke();

	requestAnimationFrame(render);
};

render();
