import dateFnsFormat from 'date-fns/format'
import getMonth from 'date-fns/getMonth'
import compareAsc from 'date-fns/compareAsc'
import compareDesc from 'date-fns/compareDesc'
import getDay from 'date-fns/getDay'

const DEFAULT_FORMAT = 'yyyy-MM-dd HH:mm'
export const format = (date = new Date(), formatString?: string) => dateFnsFormat(date, formatString ?? DEFAULT_FORMAT)

const compareFn = (isAsc: boolean) => isAsc ? compareAsc : compareDesc
export const compareMonth = (isAsc = true, ...dates: Date[]) => dates.map(getMonth).sort(compareFn(isAsc))
export const compareDay = (isAsc = true, ...dates: Date[]) => dates.map(getDay).sort(compareFn(isAsc))
