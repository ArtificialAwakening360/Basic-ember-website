import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cocojumbo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    test('it renders the content inside a jumbo header with a tomster', async function(assert) {
      await render(hbs`<Jumbo>Hello World</Jumbo>`);
      
      assert.dom('.cocojumbo').exists();
      assert.dom('.cocojumbo').hasText('Hello World');
      assert.dom('.cocojumbo .tomster').exists();
  
    });
  });
});