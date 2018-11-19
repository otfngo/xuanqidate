const defaultMask = 'YYYY-MM-DD HH:mm:ss'

const xuanqidate = (mask = defaultMask, date = new Date()) => {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  if (Number.isNaN(date)) {
    throw TypeError('Invalid date')
  }

  const _ = 'get'
  const Y = date[`${_}FullYear`]()
  const D = date[`${_}Date`]()

}