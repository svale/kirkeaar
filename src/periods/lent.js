import { getAskeonsdag } from '../constants/askeonsdag.js'
import { getComputus } from '../constants/computus.js'
import makePayload from '../utils/makePayload.js'
import { DateTime } from 'luxon'
import { getBebudelse } from '../constants/bebudelse.js'

const lent = startYear => {
  const period = 'lent'
  const periodInfo = `I kirkehistorien har de viktigste periodene også fått fastetider, som forberedelsestid. Påskefasten er den store fastetiden i Kirkeåret.
  Hvor en skal forberede seg på påsken som kommer.`
  const computus = getComputus(startYear)
  const askeonsdagDate = getAskeonsdag(startYear)
  const palmSundayDate = computus.minus({week: 1}).startOf('day')
  const mariaBudskapsdag = getBebudelse(startYear)

  const ashWednesday =
    {
      name: 'Askeonsdag',
      date: askeonsdagDate,
      color: 'purple',
      id: 'ash-wednesday',
    }

  const palmSunday =
    {
      name: 'Palmesøndag',
      date: palmSundayDate,
      color: 'purple',
      id: 'palm-sunday',
    }


  // List over sundays from 1. sønday of lent
  // to 4. sunday of lent
  // including maria bebudelsesdag
  let lentSundayDayList = []

  for ( let i = 1; i <=5; i++ ) {
    lentSundayDayList = [palmSundayDate.minus({week: i}), ...lentSundayDayList]
  }

  let lent = [ashWednesday, palmSunday]
  let dayNumber = 1

  for ( let day of lentSundayDayList ) {
    let sunday = {}
    if (day.hasSame(mariaBudskapsdag, 'day')) {
      sunday = {
        name: 'Maria Budskapsdag',
        date: mariaBudskapsdag,
        color: 'white',
        id: 'mary-sunday-lent',
      }
    } else {
      sunday = {
        name: `${dayNumber}. Søndag i Fastetiden`,
        date: day,
        color: 'purple',
        id: `${dayNumber}-sunday-lent`,
      }
      dayNumber++
    }
    lent = [sunday, ...lent]
  }

  lent = lent.sort((a,b) => {
    return (a.date < b.date) ? -1 : 1
  })




  const payload = []
  for (let day of lent) {
    payload.push(
      makePayload({
        startYear,
        name: day.name,
        dateTime: day.date,
        color: day.color,
        periodInfo,
        period,
        otherContent: { id: day.id },
      })
    )
  }

  return payload
}

export { lent }
