import { nextByDate } from './src/utils/search.js'
import churchYear from './src/periods/churchYear.js'
import { advent } from './src/periods/advent.js'
import { lent } from './src/periods/lent.js'
import { easter } from './src/periods/easter.js'
import { pentacost } from './src/periods/pentacost.js'
import { trinity } from './src/periods/trinity.js'

// const res = searchByName('1. treenig')
// const res = nextByDate('2022 01 02')
// console.log(res)
// console.log(trinity())

const church = { nextByDate }
export default church
