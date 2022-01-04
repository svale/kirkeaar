import { getChristmasEve } from './christmasEve.js'

const getEpiphanyStart = startYear => {
  const date = getChristmasEve(startYear)
  return date.endOf('year').plus({ day: 1 }).endOf('week')
}

export { getEpiphanyStart }
