import { DateTime } from 'luxon'
import churchYear from '../periods/churchYear.js'
import { calculateStartYear } from './calculateStartYear.js'

const safeString = query => {
  let payload = `^${query
    .replaceAll('.', '\\.')
    .replaceAll(' ', '.*')
    .replaceAll('-', '.*')
    .replaceAll('_', '.*')}.*`

  return payload
}

const findByName = (query, startYear = calculateStartYear(DateTime.now())) => {
  const year = churchYear({ year: startYear })
  const regexQuery = new RegExp(safeString(query), 'gi')
  const filter = year.filter(day => {
    return day.name.match(regexQuery)
  })
  return filter
}
export { findByName }

// console.log(findByName('3_åpenbaring', 2021))
