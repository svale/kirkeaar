import readingsList from './readingsList.js'

const getReadings = ({ day, number }) => {
  if (!day) return Error('No day')
  let payload = readingsList[day]
  return payload
}

export { getReadings }
