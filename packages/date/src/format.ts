import dateFnsFormat from 'date-fns/format'
import getMonth from 'date-fns/getMonth'
import compareAsc from 'date-fns/compareAsc'
import compareDesc from 'date-fns/compareDesc'

const DEFAULT_FORMAT = 'yyyy-MM-dd HH:mm'
export const format = (date = new Date(), formatString?: string) => dateFnsFormat(date, formatString ?? DEFAULT_FORMAT)

const compareFn = (isAsc: boolean) => isAsc ? compareAsc : compareDesc
export const compareMonth = (isAsc = true, ...dates: Date[]) => dates.map(getMonth).sort(compareFn(isAsc))


