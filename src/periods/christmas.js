import { getChristmasEve } from '../constants/christmasEve.js'
import makePayload from '../utils/makePayload.js'

const getDays = startYear => {
  const christmasEve = getChristmasEve(startYear)
  const payload = [
    {
      name: 'Julaften',
      altName: 'Ottesang',
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
  return payload
}

const christmas = startYear => {
  const periodInfo = `I juletiden feires Jesu fødsel`
  const christmasDays = getDays(startYear)
  let payload = []

  for (let {
    name,
    altName,
    date: dateTime,
    color,
    info: periodInfo,
  } of christmasDays) {
    const result = {
      startYear,
      name,
      altName,
      dateTime,
      color,
      periodInfo,
      period: 'christmas',
    }
    // if ('altName' in day) result.altName = day.altName
    payload.push(makePayload(result))
  }

  return payload
}

export { christmas }
