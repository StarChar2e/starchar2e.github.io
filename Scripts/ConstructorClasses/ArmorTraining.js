import {Training} from "../Constants.js";

export class ArmorTraining {
	constructor(training) {
		this.unarmored = training.simple || Training.TRAINED
		this.light = training.martial || Training.UNTRAINED
		this.medium = training.advanced || Training.UNTRAINED
		this.heavy = training.unarmed || Training.UNTRAINED
	}
}