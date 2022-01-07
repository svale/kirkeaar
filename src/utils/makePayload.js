import { COLORS } from '../constants/colors.js'

const makePayload = ({
  startYear,
  name,
  dateTime,
  color = 'green',
  periodInfo,
  period,
  otherContent,
}) => {
  return {
    years: `${startYear}-${startYear + 1}`,
    name,
    day: dateTime.toString(),
    dateTime: dateTime.startOf('day'),
    liturgical_color: COLORS[color],
    periodInfo: periodInfo.trim(),
    period,
    ...otherContent,
  }
}

export default makePayload
