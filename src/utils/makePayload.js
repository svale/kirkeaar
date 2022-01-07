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
    day: dateTime.setZone('Europe/Oslo').toString(),
    dateTime: dateTime.setZone('Europe/Oslo').startOf('day'),
    liturgical_color: COLORS[color],
    periodInfo: periodInfo,
    period,
    ...otherContent,
  }
}

export default makePayload
