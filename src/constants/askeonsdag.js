import { getComputus } from './computus.js'

const getAskeonsdag = startYear => {
  const date = getComputus(startYear)
  return date.minus({ weeks: 6, days: 3 })
}

export { getAskeonsdag }
