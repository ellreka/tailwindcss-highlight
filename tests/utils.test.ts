import { getClassNames } from '../src/utils/utils'

const filetext = `
  className={clsx('px-10 mt-10 space-x-5 border', {
    'w-10 h-5': true
  })}
`

test('test2', () => {
  expect(getClassNames(filetext)).toStrictEqual([
    {
      text: "'px-10 mt-10 space-x-5 border'",
      start: 19
    },
    {
      text: "'w-10 h-5'",
      start: 57
    }
  ])
})
