var Person = function(name, age, height, weight){
	Mammal.call(this, name);

	this.age = age;
	this.height = height;
	this.weight = weight;
};

Person.prototype = Object.create(Mammal.prototype);

/**
 * Person Methods
 */
_.extend(Person.prototype, {
	jump: function(height){
		console.log(this.name + ', who is ' + this.height + ' ft tall, jumped ' + height + ' feet.');
	}
});

