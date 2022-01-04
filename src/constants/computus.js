import { gregorian } from 'computus'
import { DateTime } from 'luxon'

const getComputus = startYear => {
  return DateTime.fromJSDate(gregorian(startYear + 1)).setZone('UTC+1')
}

export { getComputus }
