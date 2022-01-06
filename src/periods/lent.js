import { getAskeonsdag } from '../constants/askeonsdag.js'
import { getComputus } from '../constants/computus.js'
import makePayload from '../utils/makePayload.js'

const lent = startYear => {
  const periodInfo = `I kirkehistorien har de viktigste periodene også fått fastetider, som forberedelsestid. Påskefasten er den store fastetiden i Kirkeåret.
  Hvor en skal forberede seg på påsken som kommer.`
  const computus = getComputus(startYear)
  const askeonsdag = getAskeonsdag(startYear)
  const lentNames = [
    [
      'Askeonsdag',
      askeonsdag,
      'purple',
    ],
    [
      '1. Søndag i Fastetiden',
      computus.minus({ weeks: 6 }).endOf('week').startOf('day'),
      'purple',
    ],
    [
      '2. Søndag i Fastetiden',
      computus.minus({ weeks: 5 }).endOf('week').startOf('day'),
      'purple',
    ],
    [
      '3. Søndag i Fastetiden',
      computus.minus({ weeks: 4 }).endOf('week').startOf('day'),
      'purple',
    ],
    [
      'Maria Budskapsdag',
      computus.minus({ weeks: 3 }).endOf('week').startOf('day'),
      'white',
    ],
    [
      '4. Søndag i Fastetiden',
      computus.minus({ weeks: 2 }).endOf('week').startOf('day'),
      'purple',
    ],
    [
      'Palmesøndag',
      computus.minus({ weeks: 1 }).endOf('week').startOf('day'),
      'purple',
    ],
  ]

  const payload = []

  // console.log(computus.toString())
  for (let day of lentNames) {
    payload.push(
      makePayload({ name: day[0], dateTime: day[1], color: day[2], periodInfo })
    )
  }

  return payload
}

export { lent }
