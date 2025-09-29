import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

// name; traits; hitPoints; size; baseSpeed; boosts; flaw; optionalFlaws; optionalBoost; languages; vision; special; description;

export let Human = new Ancestry();

Human.setValueOf("name", "Human");
Human.setValueOf("traits", ["Human", "Humanoid"]);
Human.setValueOf("hitPoints", 8);
Human.setValueOf("size", "Medium");
Human.setValueOf("baseSpeed", 25);
Human.setValueOf("boosts", ["Two free attribute boosts"]);
Human.setValueOf("flaw", []);
Human.setValueOf("languages", "Common");
Human.setValueOf("vision", "Normal");
Human.setValueOf("special", []);
Human.setValueOf("description",
  "Humans are known for their ability to adapt and thrive in the most challenging situations, including the mysterious loss of their home world, Golarion. Ambitious, creative, and endlessly curious, humans maintain a robust presence in the galaxy, often taking on positions of leadership or acting at the forefront of exploration. Humans can be found almost anywhere, doing almost anything.."
);