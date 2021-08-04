type ValueFromQueryString = string | number | boolean
export const getQueryString = (
  queryObject: { [key: string]: ValueFromQueryString },
) => Object.entries(queryObject).map(([k, v]) => `${k}=${v}`).join('&')
