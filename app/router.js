import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page-not-found', { path: '/*path' });


  this.route('home', { path: '/' });
  this.route('blogs');
  this.route('projects');
});

export default Router;
