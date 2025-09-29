export class GetAndSet {
	listenerForSetters;
	
	constructor(){
		this.listenerForSetters = function(){};
	}
	
	getValueOf(name){
		let key = "_" + name;
		let value = "";

		if(key in this){
			value = this[key];
		}
		else{
			alert("Trying to get a value that does not have a key. Key being attempted is " + name);
		}

		return value;
	}
	
	setValueOf(name, value) {
		let key = "_" + name;
		
		if(key in this){
			this[key] = value;
			this.listenerForSetters();
		}
		else{
			alert("Trying to set a value that does not have a key. Key being attempted is " + name);
		}
	}
	
	setListener(/*function*/listener){
		if(listener instanceof Function){
			this.listenerForSetters = listener;
		}
		else{
			alert("Trying to set a listener that is not a function");
		}
	}
}