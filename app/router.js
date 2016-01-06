import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('product', function() {
    this.route('create');
    this.route('edit');
  });
  this.route('create');
});

export default Router;
