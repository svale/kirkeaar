import { calculateFirstAdvent } from './calculateFirstAdvent.js'

const calculateStartYear = date => {
  const firstAdvent = calculateFirstAdvent(date.year)
  const kongedag = firstAdvent.minus({ weeks: 1 })
  if (date <= kongedag) {
    const year = date.year - 1
    console.info(`start år satt til ${year}`)
    return year
  } else {
    const year = date.year
    console.info(`start år satt til ${date.year}`)
    return year
  }
}

export { calculateStartYear }
