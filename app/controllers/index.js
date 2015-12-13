import Ember from 'ember';

export default Ember.Controller.extend({
  // needs: [],
  myStyle: Ember.computed('color', function() {
    var color = (this.get('color'));
    return new Ember.Handlebars.SafeString("color: " + color);
  }),

  actions: {
    bandDidChange: function(value){
      if (value.length < 1) {

      } else {
        console.log(value);
      }
    }
  }
});
