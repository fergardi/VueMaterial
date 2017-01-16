// Import Vue and the component being tested
import 'babel-polyfill'
import Achievement from '../../src/views/Achievement.vue'

describe('Achievement', () => {
  // Inspect the raw component options
  it('Has a created function', () => {
    expect(typeof Achievement.created).toBe('function')
  })
})
