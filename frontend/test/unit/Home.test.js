// Import Vue and the component being tested
import 'babel-polyfill'
import Home from '../../src/views/Home.vue'

describe('Home', () => {
  // Inspect the raw component options
  it('Has created function', () => {
    expect(typeof Home.created).toBe('function')
  })
  it('Has data function', () => {
    expect(typeof Home.data).toBe('function')
    expect(typeof Home.data().cards).toBe('object')
  })
})
