import {Ancestry} from "../../ConstructorClasses/Ancestry.js";

//constructor(name, traits, hitPoints, size, baseSpeed, boosts, flaw, languages, vision, special, description)

export let kasatha = new Ancestry(
	"Kasatha",
	["Humanoid", "Kasatha"],
	8,
	"Medium",
	25,
	["Str", "Wis", "Free"],
	["Cha"],
	["Common", "Kasatha"],
	"Normal",
	[{"Four-Armed" : "You have four arms, which allows you to wield and hold up to four hands' worth of weapons and equipment. At any time, one pair of hands is designated as your active hands. You can change this designation from one pair of hands to another by taking the Switch Hands action action, which is a single action. You can wield items only with your active hands."}],
	"Kasathas are humanoids with gray skin, four arms, and pure black eyes. They have an elongated skull that extends behind their neck, further accentuating their tall frames. After evolving to survive migrations on a massive world, many kasathas have wiry bodies with thick musculature that makes them strong despite their lanky appearance."
);