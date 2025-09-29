import {profiency} from "../Constants.js";

export class ArmorTraining {
	constructor(training) {
		this.unarmored = training.simple || profiency.TRAINED
		this.light = training.martial || profiency.UNTRAINED
		this.medium = training.advanced || profiency.UNTRAINED
		this.heavy = training.unarmed || profiency.UNTRAINED
	}
}