import { christmasEve } from '../constants/constants.js'
import makePayload from '../utils/makePayload.js'

const christmas = () => {
  const christmasName = [
    [
      'Julaften',
      christmasEve,
      'white',
    ],
    [
      'Juledag',
      christmasEve.plus({ day: 1 }),
      'white',
    ],
    [
      '2. Juledag',
      christmasEve.plus({ day: 2 }),
      'red',
    ],
    [
      'Nyttårsaften',
      christmasEve.endOf('year'),
      'white',
    ],
    [
      'Nyttårsdag',
      christmasEve.endOf('year').plus({ day: 1 }),
      'white',
    ],
  ]

  let payload = []

  for (let day of christmasName) {
    payload.push(makePayload(day[0], day[1]))
  }

  return payload
}

export { christmas, christmasEve }
