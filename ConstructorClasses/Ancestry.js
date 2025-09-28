export class Ancestry {
	constructor(name, traits, hitPoints, size, baseSpeed, boosts, flaw, languages, vision, special, description) {
		this.name = name || "";
		this.traits = traits || [];
		this.hitPoints = hitPoints || 8;
		this.size = size || "Medium"
		this.baseSpeed = baseSpeed || 25;
		this.boosts = boosts || ["Free", "Free"];
		this.flaw = flaw || [];
		this.languages = languages || ["Common"];
		this.vision = vision || "Normal"
		this.special = special || [{}];
		this.description = description || "";
	}
}