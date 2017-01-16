// Import Vue and the component being tested
import 'babel-polyfill'
import Help from '../../src/views/Help.vue'

describe('Help', () => {
  // Inspect the raw component options
  it('Has a created function', () => {
    expect(typeof Help.created).toBe('function')
  })
})
