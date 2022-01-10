import { getChristmasEve } from '../constants/christmasEve.js'
import makePayload from '../utils/makePayload.js'

const christmasDays = [
  {
    name: 'Julaften',
    date: christmasEve,
    color: 'white',
  },
  {
    name: 'Juledag',
    date: christmasEve.plus({ days: 1 }),
    color: 'white',
  },
  {
    name: '2. Juledag',
    altName: 'Stefanusdagen',
    date: christmasEve.plus({ day: 2 }),
    color: 'red',
  },
  {
    name: 'Nyttårsaften',
    date: christmasEve.endOf('year').startOf('day'),
    color: 'white',
  },
]

const christmas = startYear => {
  const periodInfo = `I juletiden feires Jesu fødsel`
  const christmasEve = getChristmasEve(startYear)
  let payload = []

  for (let day of christmasName) {
    payload.push(
      makePayload({
        startYear,
        name: day[0],
        dateTime: day[1],
        color: day[2],
        periodInfo,
        period: 'christmas',
      })
    )
  }

  return payload
}

export { christmas }
