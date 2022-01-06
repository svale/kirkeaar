import { getChristmasEve } from '../constants/christmasEve.js'
import makePayload from '../utils/makePayload.js'

const christmas = startYear => {
  const periodInfo = `I juletiden feires Jesu fødsel`
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
    payload.push(
      makePayload({
        name: day[0],
        dateTime: day[1],
        color: day[2],
        periodInfo,
        period: 'christmas',
      })
    )
  }

  return payload
}

export { christmas }
