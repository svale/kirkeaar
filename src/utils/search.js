import churchYear from '../periods/churchYear.js'
import months from '../constants/months.js'
import luxon from 'luxon'

const searchByName = query => {
  const safeString = new RegExp(query.replaceAll(' ', '*'), 'i')
  console.log({ query, safeString })
  return churchYear.find(element => element.name.match(safeString))
}

// const searchByDate = date => {
//   const safeString = new RegExp(date.replaceAll(' ', '-'))
//   return churchYear.find(element => element.day.match(safeString))
// }

const nextByDate = date => {
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
    dateTime = luxon.DateTime.fromISO(date.replaceAll(' ', '-'))
  } else if (date.match(/^[1-9][0-9][0-9][0-9] [0-3][0-9]? [a-z]*$/i)) {
    // 2021 31 desember
    const sub = substitute(date, 2, ' ')
    dateTime = luxon.DateTime.fromFormat(sub.join(' '), 'yyyy d M')
  } else if (date.match(/^[0-3][0-9]? [a-z]* [1-9][0-9][0-9][0-9]*$/i)) {
    // 31 desember 2021
    const sub = substitute(date, 1, ' ')
    dateTime = luxon.DateTime.fromFormat(sub.join(' '), 'd M yyyy')
  } else if (date.match(/^[1-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/)) {
    // 2021-12-31
    dateTime = luxon.DateTime.fromISO(date)
  }

  let search = churchYear.find(element =>
    element.dateTime.hasSame(dateTime, 'day')
  )

  if (search === undefined) {
    search = churchYear.find(element =>
      element.dateTime.hasSame(dateTime.endOf('week'), 'day')
    )
  }

  const results = {
    search: date,
    dateTime,
    result: search,
  }

  return results
}

export { searchByName, nextByDate }
