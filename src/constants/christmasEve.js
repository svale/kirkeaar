import { DateTime } from 'luxon'

const getChristmasEve = startYear => {
  return DateTime.fromISO(`${startYear}-12-24`).setZone('Europe/Oslo')
}

export { getChristmasEve }
