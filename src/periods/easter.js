import { Interval } from 'luxon'
import { getComputus } from '../constants/computus.js'
import { getPinse } from '../constants/pinse.js'
import makePayload from '../utils/makePayload.js'

const easter = startYear => {
  const period = 'easter'
  const periodInfo = `Påsketiden er den viktigste delen av kirkeåret, da feires Jesu død og oppstandelse. Påsketiden innledes med den påskeuken,
  så fortsetter påsketiden fra påskedag til Pinse.`
  const computus = getComputus(startYear)
  const pinse = getPinse(startYear)
  const easterNames = [
    [
      'Skjærtorsdag',
      computus.minus({ days: 3 }),
      'white',
    ],
    [
      'Langfredag',
      computus.minus({ day: 2 }),
      'white',
    ],
    [
      'Påskenatt',
      computus.minus({ day: 1 }),
      'white',
    ],
    [
      'Påskedag',
      computus,
      'white',
    ],
    [
      '2. Påskedag',
      computus.plus({ days: 1 }),
      'white',
    ],
  ]
  const payload = []

  for (let day of easterNames) {
    payload.push(
      makePayload({
        startYear,
        name: day[0],
        dateTime: day[1],
        color: day[2],
        periodInfo,
        period,
      })
    )
  }

  const EasterPentacostInterval = Interval.fromDateTimes(computus, pinse)
  let easterSundays = Math.floor(EasterPentacostInterval.length('weeks'))
  while (easterSundays > 2) {
    const week = 7 - (easterSundays - 1)
    let name = `${week + 1}. Søndag i Påsketiden`
    const day = computus.endOf('week').plus({ week }).startOf('day')
    const color = 'white'

    payload.push(
      makePayload({ startYear, name, dateTime: day, color, periodInfo, period })
    )
    easterSundays -= 1
  }

  return payload
}

export { easter }
