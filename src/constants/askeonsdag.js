import { getComputus } from './computus.js'

const getAskeonsdag = startYear => {
  const date = getComputus(startYear)
  return date.minus({ weeks: 6, days: 4 }).startOf('day')
}

export { getAskeonsdag }
