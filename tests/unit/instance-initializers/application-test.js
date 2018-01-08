import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { initialize } from 'ember-i18n-changeset-validations/instance-initializers/application';
import applicationUtil from 'dummy/utils/application';

module('Unit | Instance Initializer | application', function(hooks) {
  setupTest(hooks);

  test('initialize sets the app instance', function(assert) {
    assert.expect(1);

    let stubAppInstance = 'asdf';
    initialize(stubAppInstance);

    let result = applicationUtil.instance;
    let expected = stubAppInstance;
    assert.deepEqual(result, expected, 'app instance is the appInstance');
  });
});
