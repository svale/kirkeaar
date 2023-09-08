import churchYear from '../periods/churchYear.js'
import { nextDay } from './nextDay.js'
import { dateCheck } from './dateCheck.js'

const nextByDate = ({ date, commemorative }) => {
  let dateTime = dateCheck(date)
  // startYear = calculateStartYear(dateTime)

  const churchYearArray = churchYear({ date: dateTime, commemorative })
  let search = churchYearArray.filter(element =>
    element.dateTime.hasSame(dateTime, 'day')
  )
  // console.log(search)

  while (search.length === 0) {
    dateTime = nextDay(dateTime)
    // console.log({ checkDate: dateTime })
    search = churchYearArray.filter(element =>
      element.dateTime.hasSame(dateTime, 'day')
    )
  }

  const results = {
    search: date,
    dateTime,
    result: search,
  }

  //console.log({ nextByDate: results })
  return search
}

export { nextByDate }
