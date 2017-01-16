// Import Vue and the component being tested
import 'babel-polyfill'
import App from '../../src/App.vue'

describe('App', () => {
  // Inspect the raw component options
  it('Has a created function', () => {
    expect(typeof App.created).toBe('function')
  })
})
