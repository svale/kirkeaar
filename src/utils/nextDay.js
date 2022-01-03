import { DateTime } from 'luxon'

const nextDay = date => {
  return date.plus({ day: 1 }).startOf('day')
}

export { nextDay }
