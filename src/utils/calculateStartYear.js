import { calculateFirstAdvent } from './calculateFirstAdvent.js'
import { dateCheck } from './dateCheck.js'

const calculateStartYear = inputDate => {
  const date = dateCheck(inputDate)
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
