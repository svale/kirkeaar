import { pinse } from '../constants/constants.js'
import makePayload from '../utils/makePayload.js'

const pentacost = () => {
  const pentacostNames = [
    [
      'Kristi Himmelfartsdag',
      pinse.minus({ days: 10 }),
    ],
    [
      'Søndag før Pinse',
      pinse.minus({ week: 1 }),
    ],
    [
      'Pinseaften',
      pinse.minus({ day: 1 }),
    ],
    [
      'Pinsedag',
      pinse,
    ],
    [
      '2. Pinsedag',
      pinse.plus({ day: 1 }),
    ],
  ]

  const payload = []

  for (let day of pentacostNames) {
    payload.push(makePayload(day[0], day[1]))
  }
  return payload
}

export { pentacost }
