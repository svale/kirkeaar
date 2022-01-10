import { Interval, DateTime } from 'luxon'
import { getPinse } from '../constants/pinse.js'
import { calculateFirstAdvent } from '../utils/calculateFirstAdvent.js'
import { lastSundayOfMonth } from '../utils/lastSundayOfMonth.js'
import makePayload from '../utils/makePayload.js'

const getDays = startYear => {
  const firstSundayOfAdventNextYear = calculateFirstAdvent(startYear + 1)
  const pinse = getPinse(startYear)
  const days = [
    {
      name: 'Treenighetssøndag',
      date: pinse.plus({ weeks: 1 }).endOf('week'),
      color: 'white',
    },
    {
      name: '2. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 2 }).endOf('week'),
      color: 'green',
    },
    {
      name: '3. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 3 }).endOf('week'),
      color: 'green',
    },
    {
      name: '4. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 4 }).endOf('week'),
      color: 'green',
    },
    {
      name: '5. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 5 }).endOf('week'),
      color: 'green',
    },
    {
      name: '6. Søndag i Treenighetstiden',
      altName: 'Aposteldagen',
      date: pinse.plus({ weeks: 6 }).endOf('week'),
      color: 'red',
    },
    {
      name: '7. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 7 }).endOf('week'),
      color: 'green',
    },
    {
      name: '8. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 8 }).endOf('week'),
      color: 'green',
    },
    {
      name: '9. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 9 }).endOf('week'),
      color: 'green',
    },
    {
      name: '10. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 10 }).endOf('week'),
      color: 'green',
    },
    {
      name: '11. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 11 }).endOf('week'),
      color: 'green',
    },
    {
      name: '12. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 12 }).endOf('week'),
      color: 'green',
    },
    {
      name: '13. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 13 }).endOf('week'),
      color: 'green',
    },
    {
      name: '14. Søndag i Treenighetstiden',
      altName: 'Vingårdssøndagen',
      date: pinse.plus({ weeks: 14 }).endOf('week'),
      color: 'green',
    },
    {
      name: '15. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 15 }).endOf('week'),
      color: 'green',
    },
    {
      name: '16. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 16 }).endOf('week'),
      color: 'green',
    },
    {
      name: '17. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 17 }).endOf('week'),
      color: 'green',
    },
    {
      name: '18. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 18 }).endOf('week'),
      color: 'green',
    },
    {
      name: '19. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 19 }).endOf('week'),
      color: 'green',
    },
    {
      name: '20. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 20 }).endOf('week'),
      color: 'green',
    },
    {
      name: '21. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 21 }).endOf('week'),
      color: 'green',
    },
    {
      name: '22. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 22 }).endOf('week'),
      color: 'green',
    },
    {
      name: '23. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 23 }).endOf('week'),
      color: 'green',
    },
    {
      name: '24. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 24 }).endOf('week'),
      color: 'green',
    },
    {
      name: '25. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 25 }).endOf('week'),
      color: 'green',
    },
    {
      name: '26. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 26 }).endOf('week'),
      color: 'green',
    },
    {
      name: '27. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 27 }).endOf('week'),
      color: 'green',
    },
  ]

  const endingDays = [
    {
      name: 'Bots og Bønnedag',
      date: lastSundayOfMonth(DateTime.fromISO(`${startYear + 1}-10-01`)),
      color: 'purple',
    },
    {
      name: 'Allehelgensdag',
      date: DateTime.fromISO(`${startYear + 1}-11-01`)
        .setZone('Europe/Oslo')
        .startOf('month')
        .endOf('week'),
      color: 'white',
    },
    {
      name: 'Minnedag',
      date: DateTime.fromISO(`${startYear + 1}-11-01`)
        .setZone('Europe/Oslo')
        .startOf('month')
        .endOf('week'),
      color: 'white',
    },
    {
      name: 'Kristi kongedag',
      altName: 'Domssøndag',
      date: firstSundayOfAdventNextYear
        .minus({ weeks: 1 })
        .setZone('Europe/Oslo'),
    },
  ]

  return { days, endingDays }
}

const trinity = startYear => {
  const period = 'trinity'
  const periodInfo = `Treenighetstiden er den største delen av Kirkeåret. Og strekker seg helt fra pinsetiden er ferdig og ut kirkeåret. Altså frem til 1. søndag i Advent. Treenighetstiden har et fokus på vekst i det kristne livet.`

  let payload = []
  const trinityEndingDays = []

  const { days: trinityNames, endingDays: trinityEndingNames } = getDays(
    startYear
  )

  for (let { name, altName, date: dateTime, color } of trinityEndingNames) {
    trinityEndingDays.push(
      makePayload({
        startYear,
        name,
        altName,
        dateTime,
        color,
        periodInfo,
        period,
      })
    )
  }

  let counter = 0
  while (
    payload.length == 0 ||
    payload[payload.length - 1].dateTime <
      trinityEndingDays[0].dateTime.minus({ week: 1 })
  ) {
    const { name, altName, date: dateTime, color } = trinityNames[counter]
    payload.push(
      makePayload({
        startYear,
        name,
        altName,
        dateTime,
        color,
        periodInfo,
        period,
      })
    )

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

      payload.push(
        makePayload({
          startYear,
          name,
          altName,
          dateTime: date,
          color,
          periodInfo,
          period,
        })
      )
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
