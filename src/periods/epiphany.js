import { getChristmasEve } from '../constants/christmasEve.js'
import { getEpiphanyStart } from '../constants/epiphanyStart.js'
import { getAskeonsdag } from '../constants/askeonsdag.js'
import makePayload from '../utils/makePayload.js'
import { DateTime } from 'luxon'

const epiphany = startYear => {
  const period = 'epiphany'
  const periodInfo = `Åpenbaringstiden går fra Kristi Åpenbaringsdag, som er første søndag etter nyttår, og helt frem til fastetiden før påsken`
  const epiphanyStart = getEpiphanyStart(startYear)
  const askeonsdag = getAskeonsdag(startYear)

  const epiphanyNames = [
    {
      name: 'Kristi Åpenbaringsdag',
      date: epiphanyStart,
      color: 'white',
      id: '1-sunday-epiphany',
    },
    {
      name: '2. Søndag i Åpenbaringstiden',
      date: epiphanyStart.plus({ week: 1 }),
      id: '2-sunday-epiphany',
    },
    {
      name: '3. Søndag i Åpenbaringstiden',
      date: epiphanyStart.plus({ weeks: 2 }),
      id: '3-sunday-epiphany',
    },
    {
      name: '4. Søndag i Åpenbaringstiden',
      date: epiphanyStart.plus({ weeks: 3 }),
      id: '4-sunday-epiphany',
    },
    {
      name: '5. Søndag i Åpenbaringstiden',
      date: epiphanyStart.plus({ weeks: 4 }),
      id: '5-sunday-epiphany',
    },
    {
      name: '6. Søndag i Åpenbaringstiden',
      date: epiphanyStart.plus({ weeks: 5 }),
      id: '6-sunday-epiphany',
    },
    {
      name: 'Såmannssøndag',
      date: askeonsdag.minus({ weeks: 3 }).endOf('week').startOf('day'),
      id: '7-sunday-epiphany',
    },
    {
      name: 'Kristi forklarelsesdag',
      date: askeonsdag.minus({ week: 2 }).endOf('week').startOf('day'),
      id: '8-sunday-epiphany',
    },
    {
      name: 'Fastelavnssøndag',
      date: askeonsdag.minus({ days: 3 }),
      id: '9-sunday-epiphany',
    },
  ]

  const payload = []

  for (let day of epiphanyNames) {
    if (day.date < epiphanyNames[6].date) {
      // console.log('true', { name: day[0], date: day[1].toString() })
      // console.log('epiphany', { day: epiphanyNames[6][1].toString() })
      payload.push(
        makePayload({
          startYear,
          name: day.name,
          dateTime: day.date,
          color: day.color,
          periodInfo,
          period,
          otherContent: { id: day.id },
        })
      )
    }
  }

  for (let i = 6; i < epiphanyNames.length; i++) {
    const name = epiphanyNames[i].name
    const day = epiphanyNames[i].date
    const id = epiphanyNames[i].id
    payload.push(
      makePayload({
        startYear,
        name,
        dateTime: day,
        periodInfo,
        period,
        otherContent: { id },
      })
    )
  }

  return payload
}

export { epiphany }
