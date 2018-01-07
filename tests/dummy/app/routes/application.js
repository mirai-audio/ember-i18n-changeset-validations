import Route from '@ember/router';
import { inject as service } from '@ember/service';

export default Route.extend({
  i18n: service(),

  afterModel: function() {
    this.set('i18n.locale', 'es');
  }
});
