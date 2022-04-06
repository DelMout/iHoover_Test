const app = require("../app.ts");

describe("FunctionForInstruction", () => {
	it("If A and North-Droite", () => {
		expect(app.Droite(2, 2, "N")).toStrictEqual({ x: 2, y: 2, O: "E" });
	});
	it("If A and East-Droite", () => {
		expect(app.Droite(2, 2, "E")).toStrictEqual({ x: 2, y: 2, O: "S" });
	});
	it("If A and South-Droite", () => {
		expect(app.Droite(2, 2, "S")).toStrictEqual({ x: 2, y: 2, O: "W" });
	});
	it("If A and West-Droite", () => {
		expect(app.Droite(2, 2, "W")).toStrictEqual({ x: 2, y: 2, O: "N" });
	});
	it("If A and North-Gauche", () => {
		expect(app.Gauche(2, 2, "N")).toStrictEqual({ x: 2, y: 2, O: "W" });
	});
	it("If A and East-Gauche", () => {
		expect(app.Gauche(2, 2, "E")).toStrictEqual({ x: 2, y: 2, O: "N" });
	});
	it("If A and South-Gauche", () => {
		expect(app.Gauche(2, 2, "S")).toStrictEqual({ x: 2, y: 2, O: "E" });
	});
	it("If A and West-Gauche", () => {
		expect(app.Gauche(2, 2, "W")).toStrictEqual({ x: 2, y: 2, O: "S" });
	});
	it("If A and North-Avance", () => {
		expect(app.Avance(2, 2, "N")).toStrictEqual({ x: 2, y: 3, O: "N" });
	});
	it("If A and East-Avance", () => {
		expect(app.Avance(2, 2, "E")).toStrictEqual({ x: 3, y: 2, O: "E" });
	});
	it("If A and South-Avance", () => {
		expect(app.Avance(2, 2, "S")).toStrictEqual({ x: 2, y: 1, O: "S" });
	});
	it("If A and West-Avance", () => {
		expect(app.Avance(2, 2, "W")).toStrictEqual({ x: 1, y: 2, O: "W" });
	});
	it("CheckOverGrid : If x<0", () => {
		expect(app.checkOverGrid(-1, 2, 3, 3)).toStrictEqual({ x: 0, y: 2 });
	});
	it("CheckOverGrid : If x>grid", () => {
		expect(app.checkOverGrid(3, 2, 3, 3)).toStrictEqual({ x: 2, y: 2 });
	});
	it("CheckOverGrid : If y<0", () => {
		expect(app.checkOverGrid(1, -1, 3, 3)).toStrictEqual({ x: 1, y: 0 });
	});
	it("CheckOverGrid : If y>grid", () => {
		expect(app.checkOverGrid(1, 3, 3, 3)).toStrictEqual({ x: 1, y: 2 });
	});
	it("Instruction=A", () => {
		expect(app.Drive(4, 5, 2, 2, "N", "A")).toStrictEqual({ x: 2, y: 3, O: "N" });
	});
	it("Instruction=A et overGrid", () => {
		expect(app.Drive(4, 5, 2, 4, "N", "A")).toStrictEqual({ x: 2, y: 4, O: "N" });
	});
	it("Instruction=D", () => {
		expect(app.Drive(4, 5, 2, 2, "N", "D")).toStrictEqual({ x: 2, y: 2, O: "E" });
	});
	it("Instructions=GAAA", () => {
		expect(app.Drive(4, 5, 1, 0, "N", "GAAA")).toStrictEqual({ x: 0, y: 0, O: "W" });
	});
	it("Instructions=AAAA", () => {
		expect(app.Drive(3, 3, 0, 0, "N", "AAAA")).toStrictEqual({ x: 0, y: 2, O: "N" });
	});
	it("TEST 1 = Instructions=DADADADAA", () => {
		expect(app.Drive(10, 10, 5, 5, "N", "DADADADAA")).toStrictEqual({ x: 5, y: 6, O: "N" });
	});
});
