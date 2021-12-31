import { searchByName, nextByDate } from './src/utils/search.js'
import luxon from 'luxon'

// const res = searchByName('åpenbaringsdag')
const res = nextByDate('2022 01 02')
console.log(res)
