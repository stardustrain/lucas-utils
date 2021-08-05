import dateFnsFormat from 'date-fns/format'
import getMonth from 'date-fns/getMonth'
import compareAsc from 'date-fns/compareAsc'

const DEFAULT_FORMAT = 'yyyy-MM-dd HH:mm:ss'
export const format = (date = new Date(), formatString?: string) => dateFnsFormat(date, formatString ?? DEFAULT_FORMAT)
export const compareMonth = (...dates: Date[]) => dates.map(getMonth).sort(compareAsc)
