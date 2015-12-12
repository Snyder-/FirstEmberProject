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
		"artist": "Stevie Ray Vaughan",
		"album": "Couldn't Stand The Weather",
		"year": "1987"
	},
	{
		"artist": "Stevie Ray Vaughan",
		"album": "Double Trouble",
		"year": "1989"
	},
	{
		"artist": "B.B King",
		"album": "The Thrill is Gone",
		"year": "1967"
	}
	]
};