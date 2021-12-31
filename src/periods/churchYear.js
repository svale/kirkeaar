import { advent } from './advent.js'
import { christmas } from './christmas.js'
import { epiphany } from './epiphany.js'
import { lent } from './lent.js'
import { easter } from './easter.js'
import { pentacost } from './pentacost.js'
import { trinity } from './trinity.js'

const adventDays = advent()
const christmasDays = christmas()
const epiphanyDays = epiphany()
const lentDays = lent()
const easterDays = easter()
const pentacostDays = pentacost()
const trinityDays = trinity()

const churchYear = [
  ...adventDays,
  ...christmasDays,
  ...epiphanyDays,
  ...lentDays,
  ...easterDays,
  ...pentacostDays,
  ...trinityDays,
]

export default churchYear
