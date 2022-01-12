import readingsList from './readingsList.js'

const formatReadings = readings => {
  const payload = {}
  for (let readingType in readings) {
    const text = readings[readingType]
    if (readingType === 'F') {
      payload[readingType] = text[0]
    } else if (readings[readingType].length === 1) {
      payload[readingType] = {
        E: text[0],
      }
    } else if (readings[readingType].length === 4) {
      payload[readingType] = {
        L1: text[0],
        L2: text[1],
        L3: text[2],
        E: text[3],
      }
    } else {
      payload[readingType] = {
        L1: text[0],
        L2: text[1],
        E: text[2],
      }
    }
  }

  return payload
}

const getReadings = ({ day, number, startYear }) => {
  if (!day) return Error('No day')

  const readingListNames = [
    'I',
    'II',
    'III',
    'IV',
  ]
  const diff = Math.abs((startYear - 1983) % 3)
  const langfredagNumber = Math.abs((startYear - 1982) % 4)
  const allReadings = formatReadings(readingsList[day])
  let currentReadingName

  if (day === 'Langfredag') {
    currentReadingName = readingListNames[langfredagNumber]
  } else if ('A' in allReadings) {
    currentReadingName = 'A'
  } else {
    currentReadingName = readingListNames[diff]
  }

  let currentReadings = { name: currentReadingName }

  if ('F' in allReadings) {
    currentReadings.text = {
      ...allReadings[currentReadingName],
      F: allReadings.F,
    }
  } else {
    currentReadings.text = {
      ...allReadings[currentReadingName],
    }
  }

  // currentReadings[currentReadingName] = allReadings[currentReadingName]

  let payload = {
    allReadings: allReadings,
    currentReadings,
  }
  return payload
}

export { getReadings }

console.log(getReadings({day: '1. Søndag i Advent', startYear: 2021}))
