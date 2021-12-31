import { DateTime } from 'luxon'

const calculateFirstAdvent = year => {
  const christmasEve = DateTime.fromISO(`${year}-12-24`).setZone('Europe/Oslo')
  if (christmasEve.weekday == 7) {
    return christmasEve.endOf('week').minus({ weeks: 3 })
  } else {
    return christmasEve.endOf('week').minus({ weeks: 4 })
  }
}

export default calculateFirstAdvent
