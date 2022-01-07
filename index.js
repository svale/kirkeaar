import { nextByDate } from './src/utils/nextByDate.js'
import { findByName } from './src/utils/findByName.js'
import { findByDate } from './src/utils/findByDate.js'
import churchYear from './src/periods/churchYear.js'
import { calculateStartYear } from './src/utils/calculateStartYear.js'

const church = {
  nextByDate,
  churchYear,
  findByName,
  calculateStartYear,
  findByDate,
}

export default church

// churchYear({ year: 2021, commemorative: true }).forEach(day => {
//   console.log({ tz: day.dateTime.zoneName, day: day.name })
// })
// console.log(findByName({ query: '2 åpenbaring', commemorative: true }))
console.log(nextByDate({ date: '2022-02-05', commemorative: true }))
// console.log(findByDate({ query: '2022-02-09' }))
