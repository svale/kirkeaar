import * as luxon from 'luxon'
import { firstSundayOfAdvent } from '../constants/constants.js'
import makePayload from '../utils/makePayload.js'

const advent = () => {
  const payload = []

  for (let i = 0; i < 4; i++) {
    const firstAdvent = luxon.DateTime.fromISO(firstSundayOfAdvent)
    const currentAdvent = firstAdvent.plus({ weeks: i })
    const name = `${i + 1}. Søndag i Advent`
    const day = currentAdvent
    payload.push(makePayload(name, day))
  }
  return payload
}

export { advent }
