import { DateTime } from 'luxon'

const commemorativeDays = startYear => {
  const commemorative = [
    {
      name: 'Nyttårsdag',
      altName: 'Jesu Navnedag',
      date: DateTime.fromISO(`${startYear + 1}-01-01`),
      info:
        'Nyttårsdagen er en nasjonal merkedag, og kommer inn i kirkeåret som Jesu navnedag.',
      color: 'white',
    },
    {
      name: 'Kyndelsmesse',
      date: DateTime.fromISO(`${startYear + 1}-02-02`),
      info:
        'Marias renselsesfest, til minne om da Jesus barnet ble bært frem i tempelet (Luk 2,22-40)',
    },
    {
      name: 'Samefolkets dag',
      date: DateTime.fromISO(`${startYear + 1}-02-06`),
      info:
        'Samefolkets dag ble av samene i Norden i 1992 erlkært som en felles samisk nasjonaldag',
    },
    {
      name: '1. Mai',
      date: DateTime.fromISO(`${startYear + 1}-05-01`),
      info: 'Dagen for den internasjonale arbeiderbevegelsen',
    },
    {
      name: '17. Mai',
      date: DateTime.fromISO(`${startYear + 1}-05-17`),
      info: 'Norges nasjonaldag',
    },
    {
      name: 'Sankthansdagen',
      altName: 'Jonsok',
      date: DateTime.fromISO(`${startYear + 1}-06-24`),
      info:
        'Feires fødselsdagen til døperen Johannes. Ifølge det nye testamentet ble Johannes født 6 måneder før Jesus',
      color: 'white',
    },
    {
      name: 'Olavsdagen',
      altName: 'Olsok',
      date: DateTime.fromISO(`${startYear + 1}-07-29`),
      info:
        'Til minne om Norges nasjonalhelgen, Hellige Olav, som døde ved slagep på Stiklestad i 1030',
      color: 'red',
    },
    {
      name: 'Mikkelsmesse',
      date: DateTime.fromISO(`${startYear + 1}-09-29`),
      info: 'Dagen er viet til erkeengelen Mikael og alle englene',
      color: 'white',
    },
    {
      name: 'Reformasjonsdagen',
      date: DateTime.fromISO(`${startYear + 1}-10-31`),
      info:
        'Til minne om dagen Martin Luther slo opp de 95 tesene på kirkedøra i Wittenbarg, og er en markerinngsdag for reformasjonen.',
    },
  ]
  return commemorative
}

export { commemorativeDays }
