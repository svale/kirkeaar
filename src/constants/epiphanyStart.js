import { getChristmasEve } from './christmasEve.js'

const getEpiphanyStart = startYear => {
  const date = getChristmasEve(startYear)
  let epiphany = date
    .endOf('year')
    .plus({ day: 1 })
    .endOf('week')
    .startOf('day')
  if (epiphany.day === 1 && epiphany.month === 1)
    epiphany = epiphany.plus({ week: 1 })
  return epiphany
}

export { getEpiphanyStart }
