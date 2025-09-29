import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

// name; traits; hitPoints; size; baseSpeed; boosts; flaw; optionalFlaws; optionalBoost; languages; vision; special; description;

export let skittermander = new Ancestry();

skittermander.setValueOf("name", "Skittermander");
skittermander.setValueOf("traits", ["Humanoid","Skittermander"]);
skittermander.setValueOf("hitPoints", 6);
skittermander.setValueOf("size", "Small");
skittermander.setValueOf("baseSpeed", 25);
skittermander.setValueOf("boosts", ["Dex", "Cha", "Free"]);
skittermander.setValueOf("flaw", ["Wis"]);
skittermander.setValueOf("languages", ["Common", "Vesk"]);
skittermander.setValueOf("vision", "Low-light");
skittermander.setValueOf("special", {
  "Six-Armed": {
		description: "You have six arms, which allows you to wield and hold up to six hands' worth of weapons and equipment. At any time, one pair of hands is designated as your active hands. You can change this designation from one pair of hands to another by taking the Switch Hands action, which is a single action. You can wield items only with your active hands."
	}
});
skittermander.setValueOf("description",
  "Skittermanders are energetic, six-armed humanoids with brightly colored fur. Skittermanders accomplish tasks with chaotic enthusiasm and typically enjoy teamwork, defying even their would-be conquerors through collaboration."
);