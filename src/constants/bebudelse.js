import { gregorian } from 'computus'
import { DateTime, Interval } from 'luxon'
import { getComputus } from './computus.js'


const getBebudelse = startYear => {

  const palmSunday = getComputus(startYear)
    .endOf('week')
    .minus({week: 1})
    .startOf('day')

  const twentyFifth = DateTime
    .fromObject({ year: startYear + 1, month: 3, day: 25})
    .setZone('Europe/Oslo')

  const isAfterPalmSunday = day => {
    if ( day >= palmSunday ) {
      return true
    } else {
      return false
    }
  }

  // find closest sunday to Maria Budskapsdag
  const closestSunday = day => {
    const nextSunday = day.endOf('week')

    // If closest sunday is palm sunday,
    // the previous sunday is automatically used
    if (nextSunday.hasSame(palmSunday, 'day')) {
      const bebudelsesdag = palmSunday.minus({ week: 1})
      return bebudelsesdag.startOf('day')
    }

    const interval = Interval.fromDateTimes(day, nextSunday)

    let bebudelsesdag = (interval.length('days') <=3) ? nextSunday : nextSunday.minus({ week: 1 })

    return bebudelsesdag.startOf('day')
  }

  let mariaBudskapsdag = (isAfterPalmSunday(twentyFifth)) ? palmSunday.minus({ week: 1 }) : closestSunday(twentyFifth)

  return mariaBudskapsdag
}

export { getBebudelse }
