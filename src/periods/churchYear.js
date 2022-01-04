import { advent } from './advent.js'
import { christmas } from './christmas.js'
import { epiphany } from './epiphany.js'
import { lent } from './lent.js'
import { easter } from './easter.js'
import { pentacost } from './pentacost.js'
import { trinity } from './trinity.js'

// From constants.js
import { DateTime } from 'luxon'
import { calculateFirstAdvent } from '../utils/calculateFirstAdvent.js'
import { calculateStartYear } from '../utils/calculateStartYear.js'

const churchYear = date => {
  // Constants
  const startYear = calculateStartYear(date)
  // console.log(bug)

  // Period functions
  const adventDays = advent(startYear)
  const christmasDays = christmas(startYear)
  const epiphanyDays = epiphany(startYear)
  const lentDays = lent(startYear)
  const easterDays = easter(startYear)
  const pentacostDays = pentacost(startYear)
  const trinityDays = trinity(startYear)

  const payload = [
    ...adventDays,
    ...christmasDays,
    ...epiphanyDays,
    ...lentDays,
    ...easterDays,
    ...pentacostDays,
    ...trinityDays,
  ]
  return payload
}

export default churchYear
