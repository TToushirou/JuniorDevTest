console.log('HELLO');

const test = () => {
	console.log('this is a test');
};


let elHPoints = document.getElementById("home-pnts")
let elGPoints = document.getElementById("guest-pnts")
let elReset = document.getElementById("rst-btn")
let hPoints = 0
let gPoints = 0


function addH1Point() {
	hPoints += 1
	elHPoints.textContent = hPoints
}

function addH2Point() {
	hPoints += 2
	elHPoints.textContent = hPoints
}

function addH3Point() {
	hPoints += 3
	elHPoints.textContent = hPoints
}

function addG1Point() {
	gPoints += 1
	elGPoints.textContent = gPoints
}

function addG2Point() {
	gPoints += 2
	elGPoints.textContent = gPoints
}

function addG3Point() {
	gPoints += 3
	elGPoints.textContent = gPoints
}

function reset() {
	elHPoints.textContent = 0 
	elGPoints.textContent = 0
	hPoints = 0
	gPoints = 0
}