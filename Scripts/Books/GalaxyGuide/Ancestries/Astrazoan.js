import {Ancestry} from "/Scripts/ConstructorClasses/Ancestry.js";

// name; traits; hitPoints; size; baseSpeed; boosts; flaw; optionalFlaws; optionalBoost; languages; vision; special; description;

export let astrazoan = new Ancestry();

astrazoan.setValueOf("name", "Astrazoan");
astrazoan.setValueOf("traits"["Aberration","Astrazoan"]);
astrazoan.setValueOf("hitPoints", 8);
astrazoan.setValueOf("size", "Medium");
astrazoan.setValueOf("baseSpeed", 25);
astrazoan.setValueOf("boosts", ["Dex", "Cha", "Free"]);
astrazoan.setValueOf("flaw", ["Con"]);
astrazoan.setValueOf("languages", "Common");
astrazoan.setValueOf("vision", "Low-light");
astrazoan.setValueOf("special", {
	  "Change-Shape": {
	    description: "You can transform into a Small, Medium, or Large ancestry you know with any features you choose; for example, you choose your body type, gender, and other details within the normal range for that ancestry. This shape might resemble a specific individual or be completely unique to you. Using Change Shape counts as creating a disguise for the Impersonate use of Deception. You can remain in this shape indefinitely, and you can shift back to your true astrazoan form or another shape by using this action again. If you die while using an alternate shape, your body slowly shifts back to its natural form.",
	    traits: ["Astrazoan", "Concentrate", "Polymorph"]
		 }
		});
astrazoan.setValueOf("description",
  "Astrazoans have no clear origins or known home world. Their malleable bodies hide a peculiar natural shape they rarely show to anyone. But by changing their bodies to adapt to new situations, astrazoans have found as many homes as they have identities among the varied cultures of the galaxy."
);