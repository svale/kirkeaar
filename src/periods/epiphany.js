import { getChristmasEve } from '../constants/christmasEve.js'
import { getEpiphanyStart } from '../constants/epiphanyStart.js'
import { getAskeonsdag } from '../constants/askeonsdag.js'
import makePayload from '../utils/makePayload.js'

const epiphany = startYear => {
  const christmasEve = getChristmasEve(startYear)
  const epiphanyStart = getEpiphanyStart(startYear)
  const askeonsdag = getAskeonsdag(startYear)

  const epiphanyNames = [
    [
      'Kristi Åpenbaringsdag',
      epiphanyStart,
      'white',
    ],
    [
      '2. Søndag i Åpenbaringstiden',
      epiphanyStart.plus({ week: 1 }),
    ],
    [
      '3. Søndag i Åpenbaringstiden',
      epiphanyStart.plus({ weeks: 2 }),
    ],
    [
      '4. Søndag i Åpenbaringstiden',
      epiphanyStart.plus({ weeks: 3 }),
    ],
    [
      '5. Søndag i Åpenbaringstiden',
      epiphanyStart.plus({ weeks: 4 }),
    ],
    [
      '6. Søndag i Åpenbaringstiden',
      epiphanyStart.plus({ weeks: 5 }),
    ],
    [
      'Såmannssøndag',
      askeonsdag.minus({ weeks: 3 }).endOf('week').startOf('day'),
    ],
    [
      'Kristi forklarelsesdag',
      askeonsdag.minus({ week: 2 }).endOf('week').startOf('day'),
    ],
    [
      'Fastelavnssøndag',
      askeonsdag.minus({ days: 3 }),
    ],
  ]

  const payload = []

  for (let day of epiphanyNames) {
    if (day[1] < epiphanyNames[6][1]) {
      // console.log('true', { name: day[0], date: day[1].toString() })
      // console.log('epiphany', { day: epiphanyNames[6][1].toString() })
      payload.push(makePayload(day[0], day[1]))
    }
  }

  for (let i = 6; i < epiphanyNames.length; i++) {
    const name = epiphanyNames[i][0]
    const day = epiphanyNames[i][1]
    payload.push(makePayload(name, day))
  }

  return payload
}

export { epiphany }
