const back = (date, weeks) => {
  return date.minus({ week: weeks }).endOf('week').toString()
}

const forward = (date, weeks) => {
  return date.plus({ week: weeks }).endOf('week').toString()
}

export default { back, forward }
