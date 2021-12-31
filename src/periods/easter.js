import * as luxon from 'luxon'
import { computus, pinse } from '../constants/constants.js'
import makePayload from '../utils/makePayload.js'

const easter = () => {
  const easterNames = [
    [
      'Skjærtorsdag',
      computus.minus({ days: 2 }),
    ],
    [
      'Langfredag',
      computus.minus({ day: 1 }),
    ],
    [
      'Påskenatt',
      computus,
    ],
    [
      'Påskedag',
      computus.plus({ day: 1 }),
    ],
    [
      '2. Påskedag',
      computus.plus({ days: 2 }),
    ],
  ]
  const payload = []

  for (let day of easterNames) {
    payload.push(makePayload(day[0], day[1]))
  }

  const EasterPentacostInterval = luxon.Interval.fromDateTimes(computus, pinse)
  let easterSundays = Math.floor(EasterPentacostInterval.length('weeks'))
  while (easterSundays > 2) {
    const week = 7 - (easterSundays - 1)
    let name = `${week + 1}. Søndag i Påsketiden`
    const day = computus.endOf('week').plus({ week }).startOf('day')

    payload.push(makePayload(name, day))
    easterSundays -= 1
  }

  return payload
}

export { easter }
