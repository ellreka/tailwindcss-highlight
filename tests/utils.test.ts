import pJson from '../package.json'
import { getClassNames, getUtility } from '../src/utils/utils'
import { filetext } from './filetext'

const config =
  pJson.contributes.configuration.properties['tailwindcss-highlight.configs']
    .default

const testUtility = (regex: string): string[] => {
  const classNames = getClassNames(filetext)
  return classNames.flatMap((className) => {
    return getUtility(className.value, new RegExp(regex, 'g')).map(
      (i) => i.value
    )
  })
}

test('padding', () => {
  const expected = [
    'p-10',
    'pt-10',
    'pb-10',
    'pl-10',
    'pr-10',
    'px-10',
    'py-10',
    '-p-10'
  ]
  const regex = config.padding.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('margin', () => {
  const expected = [
    'm-10',
    'mt-10',
    'mb-10',
    'ml-10',
    'mr-10',
    'mx-10',
    'my-10',
    '-m-10'
  ]
  const regex = config.margin.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('space', () => {
  const expected = ['space-x-10', 'space-y-10', '-space-x-10', '-space-y-10']
  const regex = config.space.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})
