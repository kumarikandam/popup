import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import popup from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await popup({
      text: this.input,
    })
    return res
  },
  context: Context,
})