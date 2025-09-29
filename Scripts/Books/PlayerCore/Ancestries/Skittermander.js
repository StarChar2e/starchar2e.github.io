import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

// name; traits; hitPoints; size; baseSpeed; boosts; flaw; optionalFlaws; optionalBoost; languages; vision; special; description;

export let Skittermander = new Ancestry();

Skittermander.setValueOf("name", "Skittermander");
Skittermander.setValueOf("traits", ["Humanoid","Skittermander"]);
Skittermander.setValueOf("hitPoints", 6);
Skittermander.setValueOf("size", "Small");
Skittermander.setValueOf("baseSpeed", 25);
Skittermander.setValueOf("boosts", ["Dex", "Cha", "Free"]);
Skittermander.setValueOf("flaw", "Wis");
Skittermander.setValueOf("languages", ["Common", "Vesk"]);
Skittermander.setValueOf("vision", "Low-light");
Skittermander.setValueOf("special", {
  "Six-Armed" : "You have six arms, which allows you to wield and hold up to six hands' worth of weapons and equipment. At any time, one pair of hands is designated as your active hands. You can change this designation from one pair of hands to another by taking the Switch Hands action, which is a single action. You can wield items only with your active hands.."
});
Skittermander.setValueOf("description",
  "Skittermanders are energetic, six-armed humanoids with brightly colored fur. Skittermanders accomplish tasks with chaotic enthusiasm and typically enjoy teamwork, defying even their would-be conquerors through collaboration."
);