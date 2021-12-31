import { DateTime } from 'luxon'
import { firstSundayOfAdvent } from '../constants/constants.js'
import makePayload from '../utils/makePayload.js'

const advent = () => {
  const payload = []

  for (let i = 0; i < 4; i++) {
    const firstAdvent = DateTime.fromISO(firstSundayOfAdvent)
    const currentAdvent = firstAdvent.plus({ weeks: i })
    const name = `${i + 1}. Søndag i Advent`
    const day = currentAdvent
    const color = 'purple'
    payload.push(makePayload(name, day, color))
  }
  return payload
}

export { advent }
