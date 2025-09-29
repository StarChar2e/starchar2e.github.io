import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

// name; traits; hitPoints; size; baseSpeed; boosts; flaw; optionalFlaws; optionalBoost; languages; vision; special; description;

export let human = new Ancestry();

human.setValueOf("name", "Human");
human.setValueOf("traits", ["Human", "Humanoid"]);
human.setValueOf("hitPoints", 8);
human.setValueOf("size", "Medium");
human.setValueOf("baseSpeed", 25);
human.setValueOf("boosts", ["Free", "Free"]);
human.setValueOf("flaw", []);
human.setValueOf("languages", "Common");
human.setValueOf("vision", "Normal");
human.setValueOf("special", []);
human.setValueOf("description",
  "Humans are known for their ability to adapt and thrive in the most challenging situations, including the mysterious loss of their home world, Golarion. Ambitious, creative, and endlessly curious, humans maintain a robust presence in the galaxy, often taking on positions of leadership or acting at the forefront of exploration. Humans can be found almost anywhere, doing almost anything.."
);