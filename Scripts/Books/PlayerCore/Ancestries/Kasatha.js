import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

// name; traits; hitPoints; size; baseSpeed; boosts; flaw; optionalFlaws; optionalBoost; languages; vision; special; description;

export let kasatha = new Ancestry();

kasatha.setValueOf("name", "Kasatha");
kasatha.setValueOf("traits", ["Humanoid", "Kasatha"]);
kasatha.setValueOf("hitPoints", 8);
kasatha.setValueOf("size", "Medium");
kasatha.setValueOf("baseSpeed", "25");
kasatha.setValueOf("boosts", ["Str", "Wis", "Free"]);
kasatha.setValueOf("flaw", ["Cha"]);
kasatha.setValueOf("languages", ["Common", "Kasatha"]);
kasatha.setValueOf("vision", "Normal");
kasatha.setValueOf("special", [{
	"Four-Armed" : "You have four arms, which allows you to wield and hold up to four hands' worth of weapons and equipment. At any time, one pair of hands is designated as your active hands. You can change this designation from one pair of hands to another by taking the Switch Hands action action, which is a single action. You can wield items only with your active hands."
}]);
kasatha.setValueOf("description", "Kasathas are humanoids with gray skin, four arms, and pure black eyes. They have an elongated skull that extends behind their neck, further accentuating their tall frames. After evolving to survive migrations on a massive world, many kasathas have wiry bodies with thick musculature that makes them strong despite their lanky appearance.");