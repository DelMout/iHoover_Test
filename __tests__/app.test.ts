const app = require("../app.ts");

describe("FunctionForInstruction", () => {
	it("If A and North", () => {
		expect(app.Droite(2, 2, "N")).toStrictEqual({ x: 2, y: 2, O: "E" });
	});
	it("If A and East", () => {
		expect(app.Droite(2, 2, "E")).toStrictEqual({ x: 2, y: 2, O: "S" });
	});
	it("If A and South", () => {
		expect(app.Droite(2, 2, "S")).toStrictEqual({ x: 2, y: 2, O: "W" });
	});
	it("If A and West", () => {
		expect(app.Droite(2, 2, "W")).toStrictEqual({ x: 2, y: 2, O: "N" });
	});
	it("If A and bad initial orientation", () => {
		expect(app.Droite(2, 2, "D")).toStrictEqual("L'orientation initiale a été mal renseignée.");
	});
	it("If A and North", () => {
		expect(app.Gauche(2, 2, "N")).toStrictEqual({ x: 2, y: 2, O: "W" });
	});
	it("If A and East", () => {
		expect(app.Gauche(2, 2, "E")).toStrictEqual({ x: 2, y: 2, O: "N" });
	});
	it("If A and South", () => {
		expect(app.Gauche(2, 2, "S")).toStrictEqual({ x: 2, y: 2, O: "E" });
	});
	it("If A and West", () => {
		expect(app.Gauche(2, 2, "W")).toStrictEqual({ x: 2, y: 2, O: "S" });
	});
	it("If A and bad initial orientation", () => {
		expect(app.Gauche(2, 2, "D")).toStrictEqual("L'orientation initiale a été mal renseignée.");
	});
	it("If A and North", () => {
		expect(app.Avance(2, 2, "N")).toStrictEqual({ x: 2, y: 3, O: "N" });
	});
	it("If A and East", () => {
		expect(app.Avance(2, 2, "E")).toStrictEqual({ x: 3, y: 2, O: "E" });
	});
	it("If A and South", () => {
		expect(app.Avance(2, 2, "S")).toStrictEqual({ x: 2, y: 1, O: "S" });
	});
	it("If A and West", () => {
		expect(app.Avance(2, 2, "W")).toStrictEqual({ x: 1, y: 2, O: "W" });
	});
	it("If A and bad initial orientation", () => {
		expect(app.Avance(2, 2, "D")).toStrictEqual("L'orientation initiale a été mal renseignée.");
	});
});
