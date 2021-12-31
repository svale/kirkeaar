import { Interval, DateTime } from 'luxon'
import { pinse } from '../constants/constants.js'
import calculateFirstAdvent from '../constants/calculateFirstAdvent.js'
import { startYear } from '../constants/constants.js'

const trinity = () => {
  const firstAdventNextYear = calculateFirstAdvent(startYear + 1)

  // Potensielt 27 søndager i Treenighetstiden
  const trinityNames = [
    'Treenighetssøndag',
    '2. Søndag i Treenighetstiden',
    '3. Søndag i Treenighetstiden',
    '4. Søndag i Treenighetstiden',
    '5. Søndag i Treenighetstiden',
    '6. Søndag i Treenighetstiden',
    '7. Søndag i Treenighetstiden',
    '8. Søndag i Treenighetstiden',
    '9. Søndag i Treenighetstiden',
    '10. Søndag i Treenighetstiden',
    '11. Søndag i Treenighetstiden',
    '12. Søndag i Treenighetstiden',
    '13. Søndag i Treenighetstiden',
    '14. Søndag i Treenighetstiden',
    '15. Søndag i Treenighetstiden',
    '16. Søndag i Treenighetstiden',
    '17. Søndag i Treenighetstiden',
    '18. Søndag i Treenighetstiden',
    '19. Søndag i Treenighetstiden',
    '20. Søndag i Treenighetstiden',
    '21. Søndag i Treenighetstiden',
    '22. Søndag i Treenighetstiden',
    '23. Søndag i Treenighetstiden',
    '24. Søndag i Treenighetstiden',
    '25. Søndag i Treenighetstiden',
    '26. Søndag i Treenighetstiden',
    '27. Søndag i Treenighetstiden',
  ]

  const trinityEndingNames = [
    'Bots og Bønnedag',
    'Allehelgensdag',
    'Kristi kongedag',
  ]

  let payload = []

  const bot = DateTime.local(startYear + 1, 10)
    .setZone('Europe/Oslo')
    .endOf('week')
    .plus({ weeks: 4 })

  const allehelgen = DateTime.local(startYear + 1, 11)
    .setZone('Europe/Oslo')
    .startOf('month')
    .endOf('week')

  const kristiKongedag = firstAdventNextYear
    .minus({ weeks: 1 })
    .setZone('Europe/Oslo')

  const trinityEndingDays = [
    {
      name: trinityEndingNames[0],
      dateTime: bot,
      day: bot.toString(),
    },
    {
      name: trinityEndingNames[1],
      dateTime: allehelgen,
      day: allehelgen.toString(),
    },
    {
      name: trinityEndingNames[2],
      dateTime: kristiKongedag,
      day: kristiKongedag.toString(),
    },
  ]

  let counter = 0
  while (
    payload.length == 0 ||
    payload[payload.length - 1].dateTime <
      trinityEndingDays[0].dateTime.minus({ week: 1 })
  ) {
    payload.push({
      number: Number(trinityNames[counter].split('.')[0]),
      name: trinityNames[counter],
      dateTime: pinse.plus({ weeks: counter + 1 }),
      day: pinse.plus({ weeks: counter + 1 }).toString(),
    })
    if (counter === 0) {
      payload[0].number = 1
    }

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
      payload.push({
        number: number,
        name: `${number}. Søndag i Treenighetstiden`,
        dateTime: trinityEndingDays[1].dateTime.plus({ weeks: i }),
        day: trinityEndingDays[1].dateTime.plus({ weeks: i }).toString(),
      })
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

trinity()
