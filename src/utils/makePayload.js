import { COLORS } from '../constants/colors.js'

const makePayload = ({ name, dateTime, color = 'green', periodInfo, period, otherContent}) => {
  return {
    name,
    day: dateTime.toString(),
    dateTime: dateTime.startOf('day'),
    liturgical_color: COLORS[color],
    periodInfo: periodInfo.trim(),
      period,
      ...otherContent
  }
}

export default makePayload
