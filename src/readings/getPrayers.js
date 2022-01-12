import prayersList from './prayersList.js'

const getPrayers = ({ day }) => {
  const payload = prayersList[day]
  return payload
}

export { getPrayers }
