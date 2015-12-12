import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('albums');
	this.resource('about');
	this.resource('compliments', function() {
		this.route('commits', {path: "/commits"});
	});
});

export default Router;
