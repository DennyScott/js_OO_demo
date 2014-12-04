var Mammal = function(name){
	this.name = name;
}

Mammal.prototype = {
	eat: function(food){
		console.log("You at lots of " + food);
	}
}