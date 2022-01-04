import { getChristmasEve } from '../constants/christmasEve.js'
import makePayload from '../utils/makePayload.js'

const christmas = startYear => {
  const christmasEve = getChristmasEve(startYear)
  const christmasName = [
    [
      'Julaften',
      christmasEve,
      'white',
    ],
    [
      'Juledag',
      christmasEve.plus({ days: 1 }),
      'white',
    ],
    [
      '2. Juledag',
      christmasEve.plus({ day: 2 }),
      'red',
    ],
    [
      'Nyttårsaften',
      christmasEve.endOf('year').startOf('day'),
      'white',
    ],
    [
      'Nyttårsdag',
      christmasEve.endOf('year').plus({ day: 1 }).startOf('day'),
      'white',
    ],
  ]

  let payload = []

  for (let day of christmasName) {
    payload.push(makePayload(day[0], day[1]))
  }

  return payload
}

export { christmas }
