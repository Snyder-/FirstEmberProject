import Ember from "ember";

export default Ember.Route.extend({
	model: function() {
		return Ember.$.getJSON('https://api.github.com/repos/Snyder-/AAA-Compliment-Parser/commits').then(function(data) {
			return data.map(function(data) {
        return data.commit;
      }).reverse();
		});
	}
});