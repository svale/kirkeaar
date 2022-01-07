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

const findByName = ({
  query,
  startYear = calculateStartYear(DateTime.now()),
  commemorative,
}) => {
  const year = churchYear({ year: startYear, commemorative })
  const regexQuery = new RegExp(safeString(query), 'gi')
  const filter = year.filter(day => {
    return day.name.match(regexQuery)
  })
  const payload = { filter, regexQuery, year, startYear }
  console.log({ findByName: payload })
  return filter
}
export { findByName }

// console.log(findByName({ query: '3 åpenbaring', startYear: 2019 }))
// console.log(findByName({ query: '3 åpenbaring' }))
