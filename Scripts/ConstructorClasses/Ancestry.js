import {GetAndSet} from "./GetAndSet.js";

export class Ancestry extends GetAndSet {
	_name;
	_traits;
	_hitPoints;
	_size;
	_baseSpeed;
	_boosts;
	_flaw;
	_optionalFlaws;
	_optionalBoost;
	_languages;
	_vision;
	_special;
	_description;
	
	constructor(obj) {
		super();
		obj = obj || {};
		
		this._name = obj.name || "";
		this._traits = obj.traits || [];
		this._hitPoints = obj.hitPoints || 8;
		this._size = obj.size || "Medium";
		this._baseSpeed = obj.baseSpeed || 25;
		this._boosts = obj.boosts || ["Free", "Free"];
		this._flaw = obj.flaw || [];
		this._optionalFlaws = obj.optionalFlaws || [];
		this._optionalBoost = obj.optionalBoost || [];
		this._languages = obj.languages || ["Common"];
		this._vision = obj.vision || "Normal"
		this._special = obj.special || [{}];
		this._description = obj.description || "";
	}
}