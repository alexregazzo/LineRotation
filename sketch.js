let angleinput;
let xinput = 100;
let yinput = 100;

function setup() {
	xinput = createInput(150, 'number');
	xinput.input(calculate);
	yinput = createInput(100, 'number');
	yinput.input(calculate);
	angleinput = createInput(30, 'number');
	angleinput.input(calculate);
	calculate();
}


function calculate() {
	push();
	let angle = Number(angleinput.value()) % 360;
	let x = Number(xinput.value());
	let y = Number(yinput.value());

	background(150);
	createCanvas(windowWidth, windowHeight);
	line(0, height / 2, width, height / 2);
	line(width / 2, 0, width / 2, height);
	translate(width / 2, height / 2);


	stroke(0);
	line(0, 0, x, -y);
	noStroke();
	fill(0);
	text('(' + x + ',' + y + ')', x, -y);
	angleMode(DEGREES);

	let xx = cos(angle) * x + sin(angle) * y;
	let yy = -sin(angle) * x + cos(angle) * y;
	stroke(255, 0, 0);
	line(0, 0, xx, -yy);
	noStroke();
	fill(0);
	text('(' + round(xx * 100) / 100 + ',' + round(yy * 100) / 100 + ')', xx, -yy);

	let p1 = createVector(x, y);
	let p2 = createVector(xx, yy);

	let pos = p1.copy().rotate(-angle / 2).setMag(p1.mag() / 2);


	let asize = max(x, y);
	let abegin = -p1.heading();

	noFill();
	stroke(0, 0, 255);
	arc(0, 0, asize, asize, abegin, abegin + angle);

	text(angle + "º", pos.x, -pos.y);
	noStroke();
	fill(0, 255, 0);
	pop();
}
