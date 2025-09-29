import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

export let android = new Ancestry();

android.setValueOf("name", "Android");
android.setValueOf("traits", ["Humanoid", "Android"]);
android.setValueOf("hitPoints", 8);
android.setValueOf("size", "Medium");
android.setValueOf("baseSpeed", "25");
android.setValueOf("boosts", ["Dex", "Int", "Free"]);
android.setValueOf("flaw", ["Cha"]);
android.setValueOf("languages", ["Common"]);
android.setValueOf("vision", "Low-Light Vision");
android.setValueOf("special", {
	"Constructed" : {
		description: "Androids are immune to disease and sleep effects. They don’t need to eat or breathe, but they can ingest food and drink if they choose. They are not immune to poison, and they must still drink water or other fluids to avoid dehydration. Androids don’t suffer from fatigue due to lack of sleep and are immune to the fatigued condition from lack of rest. They still need 8 hours of downtime for daily preparations."
	}
});
android.setValueOf("description", "Androids are artificial beings created to resemble humans. They combine biological tissue with technological circuitry, making them resilient and efficient. While their features are often unnervingly perfect, subtle mechanical elements reveal their constructed nature.");
