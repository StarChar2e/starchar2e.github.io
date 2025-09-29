import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

// name; traits; hitPoints; size; baseSpeed; boosts; flaw; optionalFlaws; optionalBoost; languages; vision; special; description;

export let Astrazoan = new Ancestry();

Astrazoan.setValueOf("name", "Astrazoan");
Astrazoan.setValueOf("traits"["Aberration","Astrazoan"]);
Astrazoan.setValueOf("hitPoints", 8);
Astrazoan.setValueOf("size", "Medium");
Astrazoan.setValueOf("baseSpeed", 25);
Astrazoan.setValueOf("boosts", ["Dex", "Cha", "Free"]);
Astrazoan.setValueOf("flaw", ["Con"]);
Astrazoan.setValueOf("languages", "Common");
Astrazoan.setValueOf("vision", "Low-light");
Astrazoan.setValueOf("special", {
  "Change-Shape" : "You can transform into a Small, Medium, or Large ancestry you know with any features you choose; for example, you choose your body type, gender, and other details within the normal range for that ancestry. This shape might resemble a specific individual or be completely unique to you.."
});
Astrazoan.setValueOf("description",
  "Astrazoans have no clear origins or known home world. Their malleable bodies hide a peculiar natural shape they rarely show to anyone. But by changing their bodies to adapt to new situations, astrazoans have found as many homes as they have identities among the varied cultures of the galaxy."
);