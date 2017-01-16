// Import Vue and the component being tested
import 'babel-polyfill'
import Quest from '../../src/views/Quest.vue'

describe('Quest', () => {
  // Inspect the raw component options
  it('Has created function', () => {
    expect(typeof Quest.created).toBe('function')
  })
})
