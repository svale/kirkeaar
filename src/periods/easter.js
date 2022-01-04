import { Interval } from 'luxon'
import { getComputus } from '../constants/computus.js'
import { getPinse } from '../constants/pinse.js'
import makePayload from '../utils/makePayload.js'

const easter = startYear => {
  const computus = getComputus(startYear)
  const pinse = getPinse(startYear)
  const easterNames = [
    [
      'Skjærtorsdag',
      computus.minus({ days: 2 }),
      'white',
    ],
    [
      'Langfredag',
      computus.minus({ day: 1 }),
      'white',
    ],
    [
      'Påskenatt',
      computus,
      'white',
    ],
    [
      'Påskedag',
      computus.plus({ day: 1 }),
      'white',
    ],
    [
      '2. Påskedag',
      computus.plus({ days: 2 }),
      'white',
    ],
  ]
  const payload = []

  for (let day of easterNames) {
    payload.push(makePayload(day[0], day[1], day[2]))
  }

  const EasterPentacostInterval = Interval.fromDateTimes(computus, pinse)
  let easterSundays = Math.floor(EasterPentacostInterval.length('weeks'))
  while (easterSundays > 2) {
    const week = 7 - (easterSundays - 1)
    let name = `${week + 1}. Søndag i Påsketiden`
    const day = computus.endOf('week').plus({ week }).startOf('day')
    const color = 'white'

    payload.push(makePayload(name, day, color))
    easterSundays -= 1
  }

  return payload
}

export { easter }
