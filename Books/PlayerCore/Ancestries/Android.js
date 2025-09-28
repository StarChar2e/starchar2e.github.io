import {Ancestry} from "/ConstructorClasses/Ancestry.js";

//constructor(name, traits, hitPoints, size, baseSpeed, boosts, flaw, languages, vision, special, description)

export let android = new Ancestry(
    "Android",
    ["Humanoid", "Android"],
    8,
    "Medium",
    25,
    ["Dex", "Int", "Free"],
    ["Cha"],
    ["Common"],
    "Low-Light Vision",
    [
		{"Constructed": "Androids are immune to disease and sleep effects. They don’t need to eat or breathe, but they can ingest food and drink if they choose. They are not immune to poison, and they must still drink water or other fluids to avoid dehydration. Androids don’t suffer from fatigue due to lack of sleep and are immune to the fatigued condition from lack of rest. They still need 8 hours of downtime for daily preparations."}
	],
    "Androids are artificial beings created to resemble humans. They combine biological tissue with technological circuitry, making them resilient and efficient. While their features are often unnervingly perfect, subtle mechanical elements reveal their constructed nature."
);
