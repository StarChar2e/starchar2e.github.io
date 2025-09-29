import {Training} from "../Constants.js";

export class WeaponTraining {
	constructor(training) {
		this.simple = training.simple || Training.TRAINED
		this.martial = training.martial || Training.UNTRAINED
		this.advanced = training.advanced || Training.UNTRAINED
		this.unarmed = training.unarmed || Training.TRAINED
	}
}