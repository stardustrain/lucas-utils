type ValueFromQueryString = string | number | boolean
export const getQueryString = (
  queryObject: { [key: string]: ValueFromQueryString },
) => Object.entries(queryObject).map(([key, value]) => `${key}=${value}`).join('&')
