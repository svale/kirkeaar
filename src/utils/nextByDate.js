import churchYear from '../periods/churchYear.js'
import { nextDay } from './nextDay.js'
import { dateCheck } from './dateCheck.js'

const nextByDate = date => {
  let dateTime

  dateTime = dateCheck(date)
  // startYear = calculateStartYear(dateTime)

  const churchYearArray = churchYear({ date: dateTime })
  let search = churchYearArray.find(element =>
    element.dateTime.hasSame(dateTime, 'day')
  )

  while (search === undefined) {
    dateTime = nextDay(dateTime)
    search = churchYearArray.find(element =>
      element.dateTime.hasSame(dateTime, 'day')
    )
  }

  const results = {
    search: date,
    dateTime,
    result: search,
  }

  console.log({ nextByDate: results })
  return search
}

export { nextByDate }
