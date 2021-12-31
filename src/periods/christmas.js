import { christmasEve } from '../constants/constants.js'
import makePayload from '../utils/makePayload.js'

const christmas = () => {
  const christmasName = [
    [
      'Julaften',
      christmasEve,
    ],
    [
      'Juledag',
      christmasEve.plus({ day: 1 }),
    ],
    [
      '2. Juledag',
      christmasEve.plus({ day: 2 }),
    ],
    [
      'Nyttårsaften',
      christmasEve.endOf('year'),
    ],
    [
      'Nyttårsdag',
      christmasEve.endOf('year').plus({ day: 1 }),
    ],
  ]

  let payload = []

  for (let day of christmasName) {
    payload.push(makePayload(day[0], day[1]))
  }

  return payload
}

export { christmas, christmasEve }
