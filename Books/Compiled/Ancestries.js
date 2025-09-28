import {
	playerCoreAncestries
} from "../Books/PlayerCore/Ancestries/Ancestries.js";

import {
	galaxyGuideAncestries
} from "../Books/GalaxyGuide/Ancestries/_Ancestries.js";

let mergedAncestries =  new Map([
	...playerCoreAncestries, 
	...galaxyGuideAncestries
]);

export let ancestries = new Map([...mergedAncestries.entries()].sort());
