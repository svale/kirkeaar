# Search functions

## Installation
```
npm install church-year
```
```js
import {nextByDate, churchYear} from 'church-year'
```

## nextByDate(date)

```js
nextByDate('2021 04 20')
nextByDate('2021 20 juni')
nextByDate('20 juni 2021')
nextByDate('2021-04-31')
nextByDate(isLuxonDateTime)
```

Output:
```js
{
  name: '5. Søndag i Treenighetstiden',
  day: '2021-06-27T23:59:59.999+01:00',
  dateTime: DateTime {
    ts: 1624748400000,
    _zone: FixedOffsetZone { fixed: 60 },
    loc: Locale {
      locale: 'en-US',
      numberingSystem: null,
      outputCalendar: null,
      intl: 'en-US',
      weekdaysCache: [Object],
      monthsCache: [Object],
      meridiemCache: null,
      eraCache: {},
      specifiedLocale: null,
      fastNumbersCached: null
    },
    invalid: null,
    weekData: null,
    c: {
      year: 2021,
      month: 6,
      day: 27,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    },
    o: 60,
    isLuxonDateTime: true
  },
  liturgical_color: { name: 'Grønn', hsl: 'hsla(103, 42%, 30%, 1)' }
}
```

## churchYear({day, year})
`churchYear({day, year})` where either a date luxon date is supplied and the year is calculated, or the church years start year is supplied as `churchYear({ year: 2021 })` and the entire church year for 2021-2022 is generated and returned.

```js
churchYear({year: 2021})
churchYear({year: '2021'})
```

# ToDo
- [x] startYear is hardcoded, needs to be dynamic.
- startYear is now dynamic based on current date
