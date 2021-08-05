import dateFnsFormat from 'date-fns/format'

const DEFAULT_FORMAT = 'yyyy-MM-dd'
export const format = (date = new Date(), formatString?: string) => dateFnsFormat(date, formatString ?? DEFAULT_FORMAT)