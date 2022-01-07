# Search functions

## Installation
```
npm install church-year
```
```js
import {nextByDate, churchYear, findByName} from 'church-year'
```

## nextByDate({date, commemorative})

```js
nextByDate({ date: '2021 04 20'})
nextByDate({ date: '2021 20 juni'})
nextByDate({ date: '20 juni 2021'})
nextByDate({ date: '2021-04-31'})
nextByDate({ date: isLuxonDateTime})
```
`nextByDate()` takes an object with a date parameter, as shown above, and returns an array of filtered results based on that date. It is an array, since commemorative days, might fall on the same sundays as regular church year sundays.
By default `nextByDate({date, commemorative: false})`, so if commemorative days are needed set it to true.
Output:
```js
[
  {
    years: '2021-2022',
    name: '6. Søndag i Åpenbaringstiden',
    day: '2022-02-06T00:00:00.000+01:00',
    dateTime: DateTime {
      ts: 1644102000000,
      _zone: [IANAZone],
      loc: [Locale],
      invalid: null,
      weekData: null,
      c: [Object],
      o: 60,
      isLuxonDateTime: true
    },
    liturgical_color: { name: 'Grønn', hsl: 'hsla(103, 42%, 30%, 1)' },
    periodInfo: 'Åpenbaringstiden går fra Kristi Åpenbaringsdag, som er første søndag etter nyttår, og helt frem til fastetiden før påsken',
    period: 'epiphany'
  },
  {
    years: '2021-2022',
    name: 'Samefolkets dag',
    day: '2022-02-06T00:00:00.000+01:00',
    dateTime: DateTime {
      ts: 1644102000000,
      _zone: [IANAZone],
      loc: [Locale],
      invalid: null,
      weekData: null,
      c: [Object],
      o: 60,
      isLuxonDateTime: true
    },
    liturgical_color: { name: 'Grønn', hsl: 'hsla(103, 42%, 30%, 1)' },
    periodInfo: undefined,
    period: 'commemorative'
  }
]
```

## findByName({query, startYear})
```js
findByName({query: '3 åpenbaring'})
```
Unless `startYear` is specified, the current church years start year is used 
```js
startYear = calculateStartYear(DateTime.now())
```
Example with start year
```js
findByName({query: '3 åpenbaring', startYear : 2021})
```
The query matched with regex.
`.` gets escaped to `.*`
Samee goes for `-`and `_`gets escaped to `.*`

Output:
```js
[
  {
    name: '3. Søndag i Åpenbaringstiden',
    day: '2023-01-15T00:00:00.000+01:00',
    dateTime: DateTime {
      ts: 1673737200000,
      _zone: [IANAZone],
      loc: [Locale],
      invalid: null,
      weekData: null,
      c: [Object],
      o: 60,
      isLuxonDateTime: true
    },
    liturgical_color: { name: 'Grønn', hsl: 'hsla(103, 42%, 30%, 1)' }
  }
]
```

## churchYear({day, year})
`churchYear({day, year})` where either a date luxon date is supplied and the year is calculated, or the church years start year is supplied as `churchYear({ year: 2021 })` and the entire church year for 2021-2022 is generated and returned.

```js
churchYear({year: 2021})
churchYear({year: '2021'})
```

# ToDo
- [x] Bots og bønnedag 2018-2019 skal være 27.oktober, får 3.nov

- [ ] include minnedager
- [x] include informasjon om dag og/eller periode
- [x] startYear is hardcoded, needs to be dynamic. *startYear is now dynamic based on current date*
