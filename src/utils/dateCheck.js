import months from '../constants/months.js'
import { DateTime } from 'luxon'

const substitute = (dateString, index, separator) => {
  const divided = dateString.split(separator)
  for (let month of months) {
    if (divided[index] == month) {
      divided[index] = months.indexOf(month) + 1
    }
  }
  return divided
}

const dateCheck = input => {
  if (input.isLuxonDateTime) {
    return input
  } else if (input.match(/^[1-9][0-9][0-9][0-9] [0-1][0-9]? [0-3][0-9]?$/)) {
    // 2021 12 31 | YYYY MM DD
    return DateTime.fromISO(input.replaceAll(' ', '-')).setZone('Europe/Oslo')
  } else if (input.match(/^[1-9][0-9][0-9][0-9] [0-3][0-9]? [a-z]*$/i)) {
    // 2021 31 desember | YYYY DD MONTH
    const sub = substitute(input, 2, ' ')
    return DateTime.fromFormat(sub.join(' '), 'yyyy d M').setZone('Europe/Oslo')
  } else if (input.match(/^[0-3][0-9]? [a-z]* [1-9][0-9][0-9][0-9]*$/i)) {
    // 31 desember 2021 | DD MONTH YYYY
    const sub = substitute(input, 1, ' ')
    return DateTime.fromFormat(sub.join(' '), 'd M yyyy').setZone('Europe/Oslo')
  } else if (input.match(/^[1-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/)) {
    // 2021-12-31 | YYYY-MM-DD
    return DateTime.fromISO(input).setZone('Europe/Oslo')
  } else if (input.match(/^[1-9][0-9]{3}(-| )[0-1][0-9]/)) {
    // 2021-01 | YYYY-MM
    const sub = input.replaceAll(' ', '-')
    return DateTime.fromFormat(sub, 'yyyy-M')
  } else if (input.match(/^[1-9][0-9]{3}/)) {
    // 2021 | YYYY
    return DateTime.fromFormat(input, 'yyyy').setZone('Europe/Oslo')
  }
}

export { dateCheck }

// console.log(dateCheck('2021 12 30'))
