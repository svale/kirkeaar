import { computus, askeonsdag } from '../constants/constants.js'
import makePayload from '../utils/makePayload.js'

const lent = () => {
  const lentNames = [
    'Askeonsdag',
    '1. Søndag i Fastetiden',
    '2. Søndag i Fastetiden',
    '3. Søndag i Fastetiden',
    'Maria Budskapsdag',
    '4. Søndag i Fastetiden',
    'Palmesøndag',
  ]

  const payload = []

  console.log(computus.toString())
  payload.push(makePayload(lentNames[0], askeonsdag))

  for (let i = 1; i <= 6; i++) {
    payload.push(
      makePayload(
        lentNames[i],
        computus.minus({ weeks: 6 - i + 1 }).endOf('week').startOf('day')
      )
    )
  }

  return payload
}

export { lent }
