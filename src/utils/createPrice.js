const createPrice = (val) => +(val + '').slice(-3) + 1000

export default createPrice
