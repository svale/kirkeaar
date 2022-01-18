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
      id: 'trinity-sunday',
    },
    {
      name: '2. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 2 }).endOf('week'),
      color: 'green',
      id: '2-sunday-trinity',
    },
    {
      name: '3. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 3 }).endOf('week'),
      color: 'green',
      id: '3-sunday-trinity',
    },
    {
      name: '4. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 4 }).endOf('week'),
      color: 'green',
      id: '4-sunday-trinity',
    },
    {
      name: '5. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 5 }).endOf('week'),
      color: 'green',
      id: '5-sunday-trinity',
    },
    {
      name: '6. Søndag i Treenighetstiden',
      altName: 'Aposteldagen',
      date: pinse.plus({ weeks: 6 }).endOf('week'),
      color: 'red',
      id: '6-sunday-trinity',
    },
    {
      name: '7. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 7 }).endOf('week'),
      color: 'green',
      id: '7-sunday-trinity',
    },
    {
      name: '8. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 8 }).endOf('week'),
      color: 'green',
      id: '8-sunday-trinity',
    },
    {
      name: '9. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 9 }).endOf('week'),
      color: 'green',
      id: '9-sunday-trinity',
    },
    {
      name: '10. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 10 }).endOf('week'),
      color: 'green',
      id: '10-sunday-trinity',
    },
    {
      name: '11. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 11 }).endOf('week'),
      color: 'green',
      id: '11-sunday-trinity',
    },
    {
      name: '12. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 12 }).endOf('week'),
      color: 'green',
      id: '12-sunday-trinity',
    },
    {
      name: '13. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 13 }).endOf('week'),
      color: 'green',
      id: '13-sunday-trinity',
    },
    {
      name: '14. Søndag i Treenighetstiden',
      altName: 'Vingårdssøndagen',
      date: pinse.plus({ weeks: 14 }).endOf('week'),
      color: 'green',
      id: '14-sunday-trinity',
    },
    {
      name: '15. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 15 }).endOf('week'),
      color: 'green',
      id: '15-sunday-trinity',
    },
    {
      name: '16. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 16 }).endOf('week'),
      color: 'green',
      id: '16-sunday-trinity',
    },
    {
      name: '17. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 17 }).endOf('week'),
      color: 'green',
      id: '17-sunday-trinity',
    },
    {
      name: '18. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 18 }).endOf('week'),
      color: 'green',
      id: '18-sunday-trinity',
    },
    {
      name: '19. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 19 }).endOf('week'),
      color: 'green',
      id: '19-sunday-trinity',
    },
    {
      name: '20. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 20 }).endOf('week'),
      color: 'green',
      id: '20-sunday-trinity',
    },
    {
      name: '21. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 21 }).endOf('week'),
      color: 'green',
      id: '21-sunday-trinity',
    },
    {
      name: '22. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 22 }).endOf('week'),
      color: 'green',
      id: '22-sunday-trinity',
    },
    {
      name: '23. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 23 }).endOf('week'),
      color: 'green',
      id: '23-sunday-trinity',
    },
    {
      name: '24. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 24 }).endOf('week'),
      color: 'green',
      id: '24-sunday-trinity',
    },
    {
      name: '25. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 25 }).endOf('week'),
      color: 'green',
      id: '25-sunday-trinity',
    },
    {
      name: '26. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 26 }).endOf('week'),
      color: 'green',
      id: '26-sunday-trinity',
    },
    {
      name: '27. Søndag i Treenighetstiden',
      date: pinse.plus({ weeks: 27 }).endOf('week'),
      color: 'green',
      id: '27-sunday-trinity',
    },
  ]

  const endingDays = [
    {
      name: 'Bots og Bønnedag',
      date: lastSundayOfMonth(DateTime.fromISO(`${startYear + 1}-10-01`)),
      color: 'purple',
      id: 'bot-pray',
    },
    {
      name: 'Allehelgensdag',
      date: DateTime.fromISO(`${startYear + 1}-11-01`)
        .setZone('Europe/Oslo')
        .startOf('month')
        .endOf('week'),
      color: 'white',
      id: 'allsaints',
    },
    {
      name: 'Minnedag',
      date: DateTime.fromISO(`${startYear + 1}-11-01`)
        .setZone('Europe/Oslo')
        .startOf('month')
        .endOf('week'),
      color: 'white',
      id: 'memmory',
    },
    {
      name: 'Kristi kongedag',
      altName: 'Domssøndag',
      date: firstSundayOfAdventNextYear
        .minus({ weeks: 1 })
        .setZone('Europe/Oslo'),
      id: 'christ-king',
    },
  ]

  return { days, endingDays }
}

const trinity = startYear => {
  const period = 'trinity'
  const periodInfo = `Treenighetstiden er den største delen av Kirkeåret. Og strekker seg helt fra pinsetiden er ferdig og ut kirkeåret. Altså frem til 1. søndag i Advent. Treenighetstiden har et fokus på vekst i det kristne livet.`

  let payload = []
  const trinityEndingDays = []

  // getting the arrays from above,
  // trinityEndinngDays, are fixed or calculated from the end of the year
  // that again is calculated from 1 Advent, (3 or 4 sundays bafore 24. desember)
  const { days: trinityNames, endingDays: trinityEndingNames } = getDays(
    startYear
  )

  // I first make the appropriate payload for the ending days,
  // since they are fixed at the end, and the about of trinity sundays
  // needs to be calculated up to the first item of trinityEndingDays
  for (let { name, altName, date: dateTime, color, id } of trinityEndingNames) {
    trinityEndingDays.push(
      makePayload({
        startYear,
        name,
        altName,
        dateTime,
        color,
        periodInfo,
        period,
        otherContent: { id },
      })
    )
  }

  // adding trinity sundays as long as the current item not is of the same day
  // as the first day in trinityEndingDays array
  let counter = 0
  while (
    payload.length == 0 ||
    payload[payload.length - 1].dateTime <
      trinityEndingDays[0].dateTime.minus({ week: 1 })
  ) {
    const { name, altName, date: dateTime, color, id } = trinityNames[counter]
    payload.push(
      makePayload({
        startYear,
        name,
        altName,
        dateTime,
        color,
        periodInfo,
        period,
        otherContent: { id },
      })
    )

    counter++
  }

  // Some of the endinng days, (Bots og Bønnedag, Allehelgensdag)
  // replace their corresponding trinity sunday, but if there are sundays
  // left between 'Allehelgenssøndag' and 'Kristi Kongedag', the last sunday of the church year
  // those need to be added as well
  const intervalAllehelgensKongedag = Interval.fromDateTimes(
    trinityEndingDays[1].dateTime,
    trinityEndingDays[3].dateTime
  )

  if (intervalAllehelgensKongedag.length('weeks') > 1) {
    payload = [
      ...payload,
      trinityEndingDays[0],
      trinityEndingDays[1],
      trinityEndingDays[2],
    ]
    for (let i = 1; i < intervalAllehelgensKongedag.length('weeks'); i++) {
      const number = payload.length - 1
      const { name, date, id, color, altName } = trinityNames[number]

      payload.push(
        makePayload({
          startYear,
          name,
          altName,
          dateTime: date,
          color,
          periodInfo,
          period,
          otherContent: { id },
        })
      )
    }
    payload.push(trinityEndingDays[3])
  } else {
    payload = [
      ...payload,
      ...trinityEndingDays,
    ]
  }

  return payload
}

export { trinity }
