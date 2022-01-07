import { DateTime } from 'luxon'

const commemorativeDays = startYear => {
  const commemorative = [
    [
      'Kyndelsmesse',
      DateTime.fromISO(`${startYear + 1}-02-02`),
      'Marias renselsesfest, til minne om da Jesus barnet ble bært frem i tempelet (Luk 2,22-40)',
    ],
    [
      'Samefolkets dag',
      DateTime.fromISO(`${startYear + 1}-02-06`),
      'Samefolkets dag ble av samene i Norden i 1992 erlkært som en felles samisk nasjonaldag',
    ],
    [
      '1. Mai',
      DateTime.fromISO(`${startYear + 1}-05-01`),
      'Dagen for den internasjonale arbeiderbevegelsen',
    ],
    [
      '17. Mai',
      DateTime.fromISO(`${startYear + 1}-05-17`),
      'Norges nasjonaldag',
    ],
    [
      'Sankthansdagen/Jonsok',
      DateTime.fromISO(`${startYear + 1}-06-24`),
      'Feires fødselsdagen til døperen Johannes. Ifølge det nye testamentet ble Johannes født 6 måneder før Jesus',
    ],
    [
      'Olavsdagen',
      DateTime.fromISO(`${startYear + 1}-07-29`),
      'Til minne om Norges nasjonalhelgen, Hellige Olav, som døde ved slagep på Stiklestad i 1030',
    ],
    [
      'Mikkelsmesse',
      DateTime.fromISO(`${startYear + 1}-09-29`),
      'Dagen er viet til erkeengelen Mikael og alle englene',
    ],
    [
      'Reformasjonsdagen',
      DateTime.fromISO(`${startYear + 1}-10-31`),
      'Til minne om dagen Martin Luther slo opp de 95 tesene på kirkedøra i Wittenbarg, og er en markerinngsdag for reformasjonen.',
    ],
  ]
  return commemorative
}

export { commemorativeDays }
