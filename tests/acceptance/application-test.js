import { currentURL, findAll, visit } from 'ember-native-dom-helpers';
import { test } from 'qunit';
import moduleForAcceptance from 'dummy/tests/helpers/module-for-acceptance';

const BETWEEN_ERROR_ES = 'Url debe estar entre 11 y 2048 caracteres';
const VALID_ERROR_ES = 'Url debe ser una URL válida';

moduleForAcceptance('Acceptance | application');

test('changeset errors are translated on app/route/application', async function(assert) {
  assert.expect(3);

  await visit('/');

  assert.equal(currentURL(), '/', 'application route loaded');

  let [result_a, result_b] = await findAll('[data-test=url-error]').map(
    element => element.textContent.trim()
  );
  assert.equal(result_a, BETWEEN_ERROR_ES, 'first title error is in Spanish');
  assert.equal(result_b, VALID_ERROR_ES, 'second title error is in Spanish');
});
