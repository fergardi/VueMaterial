// Import Vue and the component being tested
import 'babel-polyfill'
import About from '../../src/views/About.vue'

describe('About', () => {
  // Inspect the raw component options
  it('Has created function', () => {
    expect(typeof About.created).toBe('function')
  })
})
