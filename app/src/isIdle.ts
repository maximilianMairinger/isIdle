import { Data } from 'josm';

export function isIdle(timeout: number = 70) {
  const isIdle = new Data(true) as any as Omit<Data<boolean>, "set"> & { stillActive: () => void }
  let timoutID: NodeJS.Timeout
  const timoutFunc = () => {(isIdle as any as Data<boolean>).set(true)}
  isIdle.stillActive = () => {
    (isIdle as any as Data<boolean>).set(false)
    clearTimeout(timoutID)
    timoutID = setTimeout(timoutFunc, timeout)
  }

  return isIdle
}

export default isIdle
