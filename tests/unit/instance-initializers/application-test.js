import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Application from '@ember/application';
import { run } from '@ember/runloop';
import application from 'mir/instance-initializers/application';
import applicationUtil from 'mir/utils/application';
import destroyApp from 'mir/tests/helpers/destroy-app';

module('Unit | Instance Initializer | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    run(() => {
      this.application = Application.create();
      this.appInstance = this.application.buildInstance();
    });
  });

  hooks.afterEach(function() {
    run(this.appInstance, 'destroy');
    destroyApp(this.application);
  });

  test('initialize sets the app instance', function(assert) {
    assert.expect(1);

    application.initialize(this.appInstance);

    let result = applicationUtil.instance;
    let expected = this.appInstance;
    assert.deepEqual(result, expected, 'app instance is the appInstance');
  });
});
