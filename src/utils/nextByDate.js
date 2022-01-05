import churchYear from '../periods/churchYear.js'
import months from '../constants/months.js'
import { DateTime } from 'luxon'
import { nextDay } from './nextDay.js'

const nextByDate = date => {
  let startYear
  let dateTime

  const substitute = (dateString, index, separator) => {
    const divided = dateString.split(separator)
    for (let month of months) {
      if (divided[index] == month) {
        divided[index] = months.indexOf(month) + 1
      }
    }
    return divided
  }

  if (date.isLuxonDateTime) {
    dateTime = date
  } else if (date.match(/^[1-9][0-9][0-9][0-9] [0-1][0-9]? [0-3][0-9]?$/)) {
    // 2021 12 31
    dateTime = DateTime.fromISO(date.replaceAll(' ', '-'))
  } else if (date.match(/^[1-9][0-9][0-9][0-9] [0-3][0-9]? [a-z]*$/i)) {
    // 2021 31 desember
    const sub = substitute(date, 2, ' ')
    dateTime = DateTime.fromFormat(sub.join(' '), 'yyyy d M')
  } else if (date.match(/^[0-3][0-9]? [a-z]* [1-9][0-9][0-9][0-9]*$/i)) {
    // 31 desember 2021
    const sub = substitute(date, 1, ' ')
    dateTime = DateTime.fromFormat(sub.join(' '), 'd M yyyy')
  } else if (date.match(/^[1-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/)) {
    // 2021-12-31
    dateTime = DateTime.fromISO(date)
  }
  // startYear = calculateStartYear(dateTime)

  let search
  const churchYearArray = churchYear({ date: dateTime })

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
