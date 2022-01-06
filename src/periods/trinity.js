import { Interval, DateTime } from 'luxon'
import { getPinse } from '../constants/pinse.js'
import { calculateFirstAdvent } from '../utils/calculateFirstAdvent.js'
import { lastSundayOfMonth } from '../utils/lastSundayOfMonth.js'
import makePayload from '../utils/makePayload.js'

const trinity = startYear => {
  const pinse = getPinse(startYear)
  const firstSundayOfAdventNextYear = calculateFirstAdvent(startYear + 1)
  // Potensielt 27 søndager i Treenighetstiden
  const trinityNames = [
    [
      'Treenighetssøndag',
      pinse.plus({ weeks: 1 }).endOf('week'),
      'white',
    ],
    [
      '2. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 2 }).endOf('week'),
      'green',
    ],
    [
      '3. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 3 }).endOf('week'),
      'green',
    ],
    [
      '4. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 4 }).endOf('week'),
      'green',
    ],
    [
      '5. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 5 }).endOf('week'),
      'green',
    ],
    [
      '6. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 6 }).endOf('week'),
      'purple',
    ],
    [
      '7. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 7 }).endOf('week'),
      'green',
    ],
    [
      '8. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 8 }).endOf('week'),
      'green',
    ],
    [
      '9. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 9 }).endOf('week'),
      'green',
    ],
    [
      '10. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 10 }).endOf('week'),
      'green',
    ],
    [
      '11. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 11 }).endOf('week'),
      'green',
    ],
    [
      '12. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 12 }).endOf('week'),
      'green',
    ],
    [
      '13. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 13 }).endOf('week'),
      'green',
    ],
    [
      '14. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 14 }).endOf('week'),
      'green',
    ],
    [
      '15. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 15 }).endOf('week'),
      'green',
    ],
    [
      '16. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 16 }).endOf('week'),
      'green',
    ],
    [
      '17. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 17 }).endOf('week'),
      'green',
    ],
    [
      '18. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 18 }).endOf('week'),
      'green',
    ],
    [
      '19. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 19 }).endOf('week'),
      'green',
    ],
    [
      '20. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 20 }).endOf('week'),
      'green',
    ],
    [
      '21. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 21 }).endOf('week'),
      'green',
    ],
    [
      '22. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 22 }).endOf('week'),
      'green',
    ],
    [
      '23. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 23 }).endOf('week'),
      'green',
    ],
    [
      '24. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 24 }).endOf('week'),
      'green',
    ],
    [
      '25. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 25 }).endOf('week'),
      'green',
    ],
    [
      '26. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 26 }).endOf('week'),
      'green',
    ],
    [
      '27. Søndag i Treenighetstiden',
      pinse.plus({ weeks: 27 }).endOf('week'),
      'green',
    ],
  ]

  const trinityEndingNames = [
    [
      'Bots og Bønnedag',
      lastSundayOfMonth(DateTime.fromISO(`${startYear + 1}-10-01`)),
      'purple',
    ],
    [
      'Allehelgensdag',
      DateTime.fromISO(`${startYear + 1}-11-01`)
        .setZone('Europe/Oslo')
        .startOf('month')
        .endOf('week'),
      'white',
    ],
    [
      'Kristi kongedag',
      firstSundayOfAdventNextYear.minus({ weeks: 1 }).setZone('Europe/Oslo'),
    ],
  ]

  let payload = []

  const trinityEndingDays = []

  for (let day of trinityEndingNames) {
    trinityEndingDays.push(makePayload(day[0], day[1].startOf('day'), day[2]))
  }

  let counter = 0
  while (
    payload.length == 0 ||
    payload[payload.length - 1].dateTime <
      trinityEndingDays[0].dateTime.minus({ week: 1 })
  ) {
    const name = trinityNames[counter][0]
    const date = trinityNames[counter][1]
    const color = trinityNames[counter][2]
    payload.push(makePayload(name, date.startOf('day'), color))

    counter++
  }

  const intervalAllehelgensKongedag = Interval.fromDateTimes(
    trinityEndingDays[1].dateTime,
    trinityEndingDays[2].dateTime
  )

  //   console.log(intervalAllehelgensKongedag.length('weeks'))
  if (intervalAllehelgensKongedag.length('weeks') > 1) {
    payload = [
      ...payload,
      trinityEndingDays[0],
      trinityEndingDays[1],
    ]
    for (let i = 1; i < intervalAllehelgensKongedag.length('weeks'); i++) {
      const number = payload.length + 1
      const name = `${number}. Søndag i Treenighetstiden`
      const date = trinityEndingDays[1].dateTime.plus({ weeks: i })
      const color = 'green'

      payload.push(makePayload(name, date, color))
    }
    payload.push(trinityEndingDays[2])
  } else {
    payload = [
      ...payload,
      ...trinityEndingDays,
    ]
  }

  return payload
}

export { trinity }
