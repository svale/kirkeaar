import { getPinse } from '../constants/pinse.js'
import { getComputus } from '../constants/computus.js'
import makePayload from '../utils/makePayload.js'

const pentacost = startYear => {
  const period = 'pentacost'
  const periodInfo = `Pinsetiden feires til minne om pinsedag, da Disiplene mottok den Hellige Ånd, 
  og talte til folk på alle forskjellig språk, om Jesu død og oppstandelse.`
  const pinse = getPinse(startYear)
  const computus = getComputus(startYear)

  const pentacostNames = [
    {
      name: 'Kristi Himmelfartsdag',
      date: computus.plus({ days: 39 }).startOf('day'),
      color: 'white',
      id: '1-pentacost',
    },
    {
      name: 'Søndag før Pinse',
      date: pinse.minus({ week: 1 }),
      color: 'white',
      id: '2-pentacost',
    },
    {
      name: 'Pinseaften',
      date: pinse.minus({ day: 1 }),
      color: 'red',
      id: '3-pentacost',
    },
    {
      name: 'Pinsedag',
      date: pinse,
      color: 'red',
      id: '4-pentacost',
    },
    {
      name: '2. Pinsedag',
      date: pinse.plus({ day: 1 }),
      color: 'red',
      id: '5-pentacost',
    },
  ]

  const payload = []

  for (let day of pentacostNames) {
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

export { pentacost }
