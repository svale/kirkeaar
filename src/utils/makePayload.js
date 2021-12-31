import { COLORS } from '../constants/colors.js'

const makePayload = (name, dateTime, color = 'green') => {
  return {
    name,
    day: dateTime.toString(),
    dateTime: dateTime.startOf('day'),
    liturgical_color: COLORS[color],
  }
}

export default makePayload
