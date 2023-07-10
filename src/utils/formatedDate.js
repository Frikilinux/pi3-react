const formatedDate = (date) => {
  const arrDate = date.split('-')
  return { day: arrDate[2], month: arrDate[1], year: arrDate[0] }
}

export default formatedDate
