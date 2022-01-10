import { COLORS } from '../constants/colors.js'
import { getReadings } from '../readings/getReadings.js'

const makePayload = ({
  startYear,
  name,
  dateTime,
  color = 'green',
  periodInfo,
  period,
  otherContent,
  altName,
}) => {
  const payload = {
    years: `${startYear}-${startYear + 1}`,
    name,
    day: dateTime.setZone('Europe/Oslo').toString(),
    dateTime: dateTime.setZone('Europe/Oslo').startOf('day'),
    liturgical_color: COLORS[color],
    periodInfo: periodInfo,
    period,
    readings: getReadings({ day: name, startYear }),
    ...otherContent,
  }
  if (altName) payload.altName = altName
  return payload
}

export default makePayload
