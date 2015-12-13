import Ember from 'ember';

export default Ember.Controller.extend({
  // needs: [],
  myStyle: Ember.computed('color', function() {
    var color = (this.get('color'));
    return new Ember.Handlebars.SafeString("color: " + color);
  }),

  imageSize: Ember.computed('width', 'height', function() {
    var width = this.get('width');
    var height = this.get('height');
    return new Ember.Handlebars.SafeString("width: " + width + "px;" + "height: " + height + "px;");
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
