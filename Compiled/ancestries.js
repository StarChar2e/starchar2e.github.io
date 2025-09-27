import {
	playerCoreAncestries
} from "../Books/PlayerCore/Ancestries.js";

import {
	galaxyGuideAncestries
} from "../Books/GalaxyGuide/Ancestries.js";

let compiledAncestries = {...playerCoreAncestries, ...galaxyGuideAncestries};

export let ancestries = new Map([...compiledAncestries.entries()].sort());
