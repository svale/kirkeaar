const makePayload = (name, dateTime) => {
  return { name, day: dateTime.toString(), dateTime: dateTime.startOf('day') }
}

export default makePayload
