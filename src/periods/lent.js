import { getAskeonsdag } from '../constants/askeonsdag.js'
import { getComputus } from '../constants/computus.js'
import makePayload from '../utils/makePayload.js'

const lent = startYear => {
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
    payload.push(makePayload(day[0], day[1], day[2]))
  }

  return payload
}

export { lent }
