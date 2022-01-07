import churchYear from '../periods/churchYear.js'
import { calculateStartYear } from './calculateStartYear.js'
import { dateCheck } from './dateCheck.js'

const findByDate = ({ query, commemorative }) => {
  // {query: year[-month]-[day]}
  const date = dateCheck(query)
  const startYear = calculateStartYear(date)
  const year = churchYear({ year: startYear, commemorative })
  const regexQuery = new RegExp(`^${query}.*`, 'gi')
  const filter = year.filter(day => {
    return day.day.match(regexQuery)
  })
  const payload = { filter, regexQuery, year, startYear }
  console.log({ findByName: payload })
  return filter
}
export { findByDate }

// const r = findByDate({ query: '2022-01-09' })
// console.log(r)
