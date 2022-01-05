import { DateTime } from 'luxon'

const lastSundayOfMonth = date => {
  let payload
  let dateTime
  if (!date.isLuxonDateTime) {
    return Error('date is not luxon DateTime')
  } else {
    dateTime = date
  }

  let endOfMonth = dateTime.setZone('Europe/Oslo').endOf('month').startOf('day')
  while (endOfMonth.toFormat('E') != 7) {
    endOfMonth = endOfMonth.minus({ day: 1 })
  }

  const lastSunday = endOfMonth

  return lastSunday
}

export { lastSundayOfMonth }
