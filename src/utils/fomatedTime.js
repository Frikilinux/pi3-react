const formatTime = (time) => {
  const h = Math.floor(time / 3600)
    .toString()
    .padStart(2, '0')
  const m = Math.floor(time % 3600 / 60)
    .toString()
    .padStart(2, '0')
  const s = Math.floor(time % 60)
    .toString()
    .padStart(2, '0')

  // return `${m}:${s}`
  return { h, m, s }
}

export default formatTime
