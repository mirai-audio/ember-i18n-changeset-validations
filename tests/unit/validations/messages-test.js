import { module, test } from 'qunit';
import { messages } from 'ember-i18n-changeset-validations/validations/messages';

module('Unit | Validation | messages');

test('overrides any default validation messages', function(assert) {
  assert.expect(1);

  assert.ok(messages, 'its ok');
});
