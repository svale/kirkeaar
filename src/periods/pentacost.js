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
    [
      'Kristi Himmelfartsdag',
      computus.plus({ days: 40 }).startOf('day'),
      'white',
    ],
    [
      'Søndag før Pinse',
      pinse.minus({ week: 1 }),
      'white',
    ],
    [
      'Pinseaften',
      pinse.minus({ day: 1 }),
      'red',
    ],
    [
      'Pinsedag',
      pinse,
      'red',
    ],
    [
      '2. Pinsedag',
      pinse.plus({ day: 1 }),
      'red',
    ],
  ]

  const payload = []

  for (let day of pentacostNames) {
    payload.push(
      makePayload({
        name: day[0],
        dateTime: day[1],
        color: day[2],
        periodInfo,
        period,
      })
    )
  }
  return payload
}

export { pentacost }
