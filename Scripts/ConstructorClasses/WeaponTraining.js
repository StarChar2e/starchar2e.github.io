import {profiency} from "../Constants.js";

export class WeaponTraining {
	constructor(training) {
		this.simple = training.simple || profiency.TRAINED
		this.martial = training.martial || profiency.UNTRAINED
		this.advanced = training.advanced || profiency.UNTRAINED
		this.unarmed = training.unarmed || profiency.TRAINED
	}
}