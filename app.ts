//* When "A" instruction (go ahead)
function Avance(intX: number, intY: number, intO: string) {
	if (intO === "N") {
		return { x: intX, y: intY + 1, O: intO };
	} else if (intO === "E") {
		return { x: intX + 1, y: intY, O: intO };
	} else if (intO === "S") {
		return { x: intX, y: intY - 1, O: intO };
	} else if (intO === "W") {
		return { x: intX - 1, y: intY, O: intO };
	}
}

//* When "G" instruction (rotate to left)
function Gauche(intX, intY, intO) {
	if (intO === "N") {
		return { x: intX, y: intY, O: "W" };
	} else if (intO === "E") {
		return { x: intX, y: intY, O: "N" };
	} else if (intO === "S") {
		return { x: intX, y: intY, O: "E" };
	} else if (intO === "W") {
		return { x: intX, y: intY, O: "S" };
	}
}

//* When "D" instruction (rotate to right)
function Droite(intX: number, intY: number, intO: string) {
	if (intO === "N") {
		return { x: intX, y: intY, O: "E" };
	} else if (intO === "E") {
		return { x: intX, y: intY, O: "S" };
	} else if (intO === "S") {
		return { x: intX, y: intY, O: "W" };
	} else if (intO === "W") {
		return { x: intX, y: intY, O: "N" };
	}
}

//* Check if movements are over the grid
function checkOverGrid(intX: number, intY: number, squareX: number, squareY: number) {
	var valueX: number = intX;
	var valueY: number = intY;
	if (intX < 0) {
		return { x: 0, y: valueY };
	} else if (intX === squareX) {
		return { x: squareX - 1, y: valueY };
	} else if (intY < 0) {
		return { x: valueX, y: 0 };
	} else if (intY === squareY) {
		return { x: valueX, y: squareY - 1 };
	} else {
		return { x: valueX, y: valueY };
	}
}

// Execute all instructions
function Drive(
	squareX: number,
	squareY: number,
	initX: number,
	initY: number,
	initO: string,
	instruct: string
) {
	const instructQty: number = instruct.length;
	var intX: number = initX; // x intermediaite
	var intY: number = initY; // y intermediaite
	var intO: string = initO; // Orientation intermediaite
	const instructTable: string[] = instruct.split(""); //Details of instructions
	var position: { x: number; y: number; O: string } = { x: initX, y: initY, O: initO };
	var positionAfterCheck: { x: number; y: number } = { x: initX, y: initY };

	for (let i = 0; i < instructQty; i++) {
		if (instructTable[i] === "A") {
			position = Avance(intX, intY, intO);
			positionAfterCheck = checkOverGrid(position.x, position.y, squareX, squareY);
			intX = positionAfterCheck.x;
			intY = positionAfterCheck.y;
		} else if (instructTable[i] === "D") {
			position = Droite(intX, intY, intO);
			intO = position.O;
		} else if (instructTable[i] === "G") {
			position = Gauche(intX, intY, intO);
			intO = position.O;
		}
	}
	return { x: intX, y: intY, O: intO };
}

module.exports = {
	Gauche,
	Avance,
	Droite,
	checkOverGrid,
	Drive,
};
