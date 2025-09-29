import {playerCoreClasses} from "../PlayerCore/Classes/-Classes.js";

let mergedClasses =  new Map([
	...playerCoreClasses
]);

export let classes = new Map([...mergedClasses.entries()].sort());
