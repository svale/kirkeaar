import { DateTime } from 'luxon'

const commemorativeDays = startYear => {
  const commemorative = [
    [
      'Kyndelsmesse',
      DateTime.fromISO(`${startYear + 1}-02-02`),
    ],
    [
      'Samefolkets dag',
      DateTime.fromISO(`${startYear + 1}-02-06`),
    ],
  ]
  return commemorative
}

export { commemorativeDays }
