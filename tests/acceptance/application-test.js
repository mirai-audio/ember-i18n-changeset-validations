import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { currentURL, visit } from '@ember/test-helpers';

const BETWEEN_ERROR_ES = 'Url debe estar entre 11 y 2048 caracteres';
const VALID_ERROR_ES = 'Url debe ser una URL válida';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('changeset errors are translated on app/route/application', async function(assert) {
    assert.expect(3);

    await visit('/');

    assert.equal(currentURL(), '/', 'application route loaded');

    let results = [];
    this.element
      .querySelectorAll('[data-test=url-error]')
      .forEach(element => results.push(element.textContent.trim()));
    let [result_a, result_b] = results;
    assert.equal(result_a, BETWEEN_ERROR_ES, 'first title error is in Spanish');
    assert.equal(result_b, VALID_ERROR_ES, 'second title error is in Spanish');
  });
});
