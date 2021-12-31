import * as luxon from 'luxon'
import { gregorian } from 'computus'
import calculateFirstAdvent from './calculateFirstAdvent.js'

const startYear = 2021
const christmasEve = luxon.DateTime
  .fromISO(`${startYear}-12-24`)
  .setZone('Europe/Oslo')
const firstSundayOfAdvent = calculateFirstAdvent(startYear)
const computus = luxon.DateTime
  .fromJSDate(gregorian(startYear + 1))
  .setZone('UTC+1')
const pinse = computus.plus({ days: 50 })
const epiphanyStart = christmasEve.endOf('year').plus({ day: 1 }).endOf('week')
const askeonsdag = computus.minus({ weeks: 6, days: 3 })

export {
  firstSundayOfAdvent,
  startYear,
  christmasEve,
  computus,
  pinse,
  epiphanyStart,
  askeonsdag,
}
