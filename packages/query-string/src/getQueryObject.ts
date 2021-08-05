import { pipe, split, last, map, fromPairs } from 'ramda'
import type { KeyValuePair } from 'ramda'

type ValueFromQueryString = string | number | boolean
const isValueFromQueryString = (x: any): x is ValueFromQueryString =>
  typeof x === 'string' ||
  typeof x === 'number' ||
  typeof x === 'boolean'

const parseValue = (value: string): ValueFromQueryString => {
  if (value.trim().length === 0) {
    return value
  }

  if (!Number.isNaN(parseInt(value, 10)) && !value.includes(',')) {
    return parseInt(value, 10)
  }

  if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
    return value.toLowerCase() === 'true'
  }

  return value
}

const isKeyValuePair = (
  x: ValueFromQueryString[][],
): x is KeyValuePair<string, ValueFromQueryString>[] =>
  Array.isArray(x) &&
  x.every(
    ([key, value]) =>
      typeof key === 'string' && isValueFromQueryString(value),
  )

export const getQueryObject = (
  url: string,
) =>
  pipe(
    split('?'),
    last,
    split('&'),
    map((qs) => {
      const [key, value] = qs.split('=')
      return [key, parseValue(decodeURIComponent(value))]
    }),
    (qs) => (isKeyValuePair(qs) ? fromPairs(qs) : null),
  )(url)
