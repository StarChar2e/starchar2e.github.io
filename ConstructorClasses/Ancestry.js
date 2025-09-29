export class Ancestry {
	#name;
	#traits;
	#hitPoints;
	#size;
	#baseSpeed;
	#boosts;
	#flaw;
	#optionalFlaws;
	#optionalBoost;
	#languages;
	#vision;
	#special;
	#description;
	
	constructor(obj) {
		this.#name = obj.name || "";
		this.#traits = obj.traits || [];
		this.#hitPoints = obj.hitPoints || 8;
		this.#size = obj.size || "Medium";
		this.#baseSpeed = obj.baseSpeed || 25;
		this.#boosts = obj.boosts || ["Free", "Free"];
		this.#flaw = obj.flaw || [];
		this.#languages = obj.languages || ["Common"];
		this.#vision = obj.vision || "Normal"
		this.#special = obj.special || [{}];
		this.#description = obj.description || "";
	}
	
	getValueOf(name){
		let value = "";

		if(name in this){
			value = this[name];
		}

		return value;
	}
	
	setValueOf(name, value) {
		if(name in this){
			this[name] = value;
		}
	}
}