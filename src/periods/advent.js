import { calculateFirstAdvent } from '../utils/calculateFirstAdvent.js'
import makePayload from '../utils/makePayload.js'

const advent = startYear => {
  const payload = []

  for (let i = 0; i < 4; i++) {
    const firstAdvent = calculateFirstAdvent(startYear)
    const currentAdvent = firstAdvent.plus({ weeks: i })
    const name = `${i + 1}. Søndag i Advent`
    const day = currentAdvent.startOf('day')
    const color = 'purple'
    payload.push(makePayload(name, day, color))
  }
  return payload
}

export { advent }
