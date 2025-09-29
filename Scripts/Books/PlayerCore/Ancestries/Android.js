import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

export let android = new Ancestry(ancestryInformation);

kasatha.setValueOf("name", "Android");
kasatha.setValueOf("traits", ["Humanoid", "Android"]);
kasatha.setValueOf("hitPoints", 8);
kasatha.setValueOf("size", "Medium");
kasatha.setValueOf("baseSpeed", "25");
kasatha.setValueOf("boosts", ["Dex", "Int", "Free"]);
kasatha.setValueOf("flaw", ["Cha"]);
kasatha.setValueOf("languages", ["Common"]);
kasatha.setValueOf("vision", "Low-Light Vision");
kasatha.setValueOf("special", {
	"Constructed" : {
		description: "Androids are immune to disease and sleep effects. They don’t need to eat or breathe, but they can ingest food and drink if they choose. They are not immune to poison, and they must still drink water or other fluids to avoid dehydration. Androids don’t suffer from fatigue due to lack of sleep and are immune to the fatigued condition from lack of rest. They still need 8 hours of downtime for daily preparations."
	}
});
kasatha.setValueOf("description", "Androids are artificial beings created to resemble humans. They combine biological tissue with technological circuitry, making them resilient and efficient. While their features are often unnervingly perfect, subtle mechanical elements reveal their constructed nature.");
