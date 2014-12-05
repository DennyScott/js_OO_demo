var Person = function(name, age, height, weight){
	Mammal.call(this, name);

	this._age = age;
	this.height = height;
	this.weight = weight;

	Object.defineProperty(this, 'age', {
		get: function() {
			console.log('im super secret');
			return this._age;
		},
		set: function(a) {
			console.log('setting');
			_age = a;
		}
	});
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

