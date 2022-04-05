function Avance(intX, intY, intO) {
	if (intO === "N") {
		return { x: intX, y: intY + 1, O: intO };
	} else if (intO === "E") {
		return { x: intX + 1, y: intY, O: intO };
	} else if (intO === "S") {
		return { x: intX, y: intY - 1, O: intO };
	} else if (intO === "W") {
		return { x: intX - 1, y: intY, O: intO };
	} else {
		return "L'orientation initiale a été mal renseignée.";
	}
}

function Gauche(intX, intY, intO) {
	if (intO === "N") {
		return { x: intX, y: intY, O: "W" };
	} else if (intO === "E") {
		return { x: intX, y: intY, O: "N" };
	} else if (intO === "S") {
		return { x: intX, y: intY, O: "E" };
	} else if (intO === "W") {
		return { x: intX, y: intY, O: "S" };
	} else {
		return "L'orientation initiale a été mal renseignée.";
	}
}

function Droite(intX, intY, intO) {
	if (intO === "N") {
		return { x: intX, y: intY, O: "E" };
	} else if (intO === "E") {
		return { x: intX, y: intY, O: "S" };
	} else if (intO === "S") {
		return { x: intX, y: intY, O: "W" };
	} else if (intO === "W") {
		return { x: intX, y: intY, O: "N" };
	} else {
		return "L'orientation initiale a été mal renseignée.";
	}
}

module.exports = {
	Gauche,
	Avance,
	Droite,
};
