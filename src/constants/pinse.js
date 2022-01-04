import { getComputus } from './computus.js'

const getPinse = startYear => {
  const dateComputus = getComputus(startYear)
  return dateComputus.plus({ days: 50 })
}

export { getPinse }
