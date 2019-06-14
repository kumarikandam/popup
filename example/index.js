/* alanode example/ */
import popup from '../src'

(async () => {
  const res = await popup({
    text: 'example',
  })
  console.log(res)
})()