import Ember from 'ember';
import md5 from 'npm:md5';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: [],
  size: 200,
  email: '',

  gravatarUrl: Ember.computed('email', 'size', function() {
    var email = this.get('email').toLowerCase(),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size;
  })
});