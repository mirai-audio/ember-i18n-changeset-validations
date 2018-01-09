import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import MediaValidations from '../validations/media';

export default Route.extend({
  i18n: service(),

  beforeModel: function() {
    this.set('i18n.locale', 'es');
  },

  model() {
    let store = get(this, 'store');
    let media = store.createRecord('media', {
      title: 'a title',
      url: 'http'
    });
    let validatorFn = lookupValidator(MediaValidations);
    let changeset = new Changeset(media, validatorFn, MediaValidations);
    changeset.validate();
    return changeset;
  }
});
