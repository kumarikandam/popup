import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import popup from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof popup, 'function')
  },
  async 'calls package without error'() {
    await popup()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await popup({
      text,
    })
    ok(res, text)
  },
}

export default T