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

console.log(findByName({ query: '3 åpenbaring', startYear: 2021 }))
