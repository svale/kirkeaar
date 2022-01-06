import { gregorian } from 'computus'
import { DateTime } from 'luxon'

const getComputus = startYear => {
  const computus = DateTime.fromJSDate(gregorian(startYear + 1)).setZone(
    'Europe/Oslo'
  )
  // console.log('getComputus: ', computus)
  return computus
}

export { getComputus }
