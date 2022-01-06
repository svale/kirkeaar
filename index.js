import { nextByDate } from './src/utils/nextByDate.js'
import { findByName } from './src/utils/findByName.js'
import churchYear from './src/periods/churchYear.js'

const church = { nextByDate, churchYear, findByName }
export default church
