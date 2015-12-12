import Ember from "ember";

export default Ember.Route.extend({
	model: function() {
		return data.result;
	}
});

var data = {
	"status": "ok",
	"result": [
	{
		"author": "Sean Snyder",
		"location": "Boston, Massachussetts",
		"age": "30",
		"hobbies": [
			"computers",
			"guitar",
			"gaming",
			"bicycling"
		]	
	}
	]
};