import Ember from 'ember';

export default Ember.Controller.extend({
  // needs: [],
  myStyle: Ember.computed('color', function() {
    var color = (this.get('color'));
    return new Ember.Handlebars.SafeString("color: " + color);
  })
});
