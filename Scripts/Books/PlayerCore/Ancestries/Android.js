import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

let ancestryInformation = {
	name : "Android",
	traits : ["Humanoid", "Android"],
	hitPoints : 8,
	size : "Medium",
	baseSpeed : 25,
	boosts : ["Dex", "Int", "Free"],
	flaw : ["Cha"],
	languages : ["Common"],
	vision : "Low-Light Vision",
	special : {
		"Constructed": "Androids are immune to disease and sleep effects. They don’t need to eat or breathe, but they can ingest food and drink if they choose. They are not immune to poison, and they must still drink water or other fluids to avoid dehydration. Androids don’t suffer from fatigue due to lack of sleep and are immune to the fatigued condition from lack of rest. They still need 8 hours of downtime for daily preparations."
	},
	description : 	"Androids are artificial beings created to resemble humans. They combine biological tissue with technological circuitry, making them resilient and efficient. While their features are often unnervingly perfect, subtle mechanical elements reveal their constructed nature."
};

export let android = new Ancestry(ancestryInformation);
