import { getAskeonsdag } from '../constants/askeonsdag.js'
import { getComputus } from '../constants/computus.js'
import makePayload from '../utils/makePayload.js'

const lent = startYear => {
  const period = 'lent'
  const periodInfo = `I kirkehistorien har de viktigste periodene også fått fastetider, som forberedelsestid. Påskefasten er den store fastetiden i Kirkeåret.
  Hvor en skal forberede seg på påsken som kommer.`
  const computus = getComputus(startYear)
  const askeonsdag = getAskeonsdag(startYear)

  const lentNames = [
    {
      name: 'Askeonsdag',
      date: askeonsdag,
      color: 'purple',
      id: 'ash-wednesday',
    },
    {
      name: '1. Søndag i Fastetiden',
      date: computus.minus({ weeks: 6 }).endOf('week').startOf('day'),
      color: 'purple',
      id: '1-sunday-lent',
    },
    {
      name: '2. Søndag i Fastetiden',
      date: computus.minus({ weeks: 5 }).endOf('week').startOf('day'),
      color: 'purple',
      id: '2-sunday-lent',
    },
    {
      name: '3. Søndag i Fastetiden',
      date: computus.minus({ weeks: 4 }).endOf('week').startOf('day'),
      color: 'purple',
      id: '3-sunday-lent',
    },
    {
      name: 'Maria Budskapsdag',
      date: computus.minus({ weeks: 3 }).endOf('week').startOf('day'),
      color: 'white',
      id: 'mary-sunday-lent',
    },
    {
      name: '4. Søndag i Fastetiden',
      date: computus.minus({ weeks: 2 }).endOf('week').startOf('day'),
      color: 'purple',
      id: '4-sunday-lent',
    },
    {
      name: 'Palmesøndag',
      date: computus.minus({ weeks: 1 }).endOf('week').startOf('day'),
      color: 'purple',
      id: 'palm-sunday',
    },
  ]

  const payload = []

  for (let day of lentNames) {
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

  return payload
}

export { lent }
