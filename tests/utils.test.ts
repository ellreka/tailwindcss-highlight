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

test('border', () => {
  const expected = [
    'border',
    'border-t-10',
    'border-t',
    'border-none',
    'border-gray-100',
    'border-opacity-0',
    'border-solid'
  ]
  const regex = config.border.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('rounded', () => {
  const expected = ['rounded', 'rounded-md', 'rounded-l-10']
  const regex = config.rounded.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('divide', () => {
  const expected = [
    'divide-x-10',
    'divide-y-10',
    'divide-x',
    'divide-y',
    'divide-gray-100'
  ]
  const regex = config.divide.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('ring', () => {
  const expected = ['ring', 'ring-0', 'ring-gray-100', 'ring-offset-gray-100']
  const regex = config.ring.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('width', () => {
  const expected = [
    'w-0',
    'w-10',
    'w-2.5',
    'w-1/2',
    'w-full',
    'min-w-100',
    'max-w-100',
    'max-w-screen-sm'
  ]
  const regex = config.width.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('height', () => {
  const expected = [
    'h-0',
    'h-10',
    'h-2.5',
    'h-1/2',
    'h-full',
    'min-h-100',
    'max-h-100'
  ]
  const regex = config.height.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('flex', () => {
  const expected = [
    'flex',
    'flex-1',
    'flex-auto',
    'flex-grow-0',
    'flex-shrink-0'
  ]
  const regex = config.flex.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('grid', () => {
  const expected = ['grid', 'grid-flow-row', 'grid-flow-row-dense']
  const regex = config.grid.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('order', () => {
  const expected = ['order-10', 'order-none', '-order-1']
  const regex = config.order.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('gridColumn', () => {
  const expected = ['col-auto', 'col-span-10', 'col-start-10', 'col-end-10']
  const regex = config.gridColumn.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('gridRow', () => {
  const expected = ['row-auto', 'row-span-10', 'row-start-10', 'row-end-10']
  const regex = config.gridRow.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('gridRow', () => {
  const expected = ['row-auto', 'row-span-10', 'row-start-10', 'row-end-10']
  const regex = config.gridRow.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('gridAutoColumns', () => {
  const expected = ['auto-cols-auto', 'auto-cols-fr']
  const regex = config.gridAutoColumns.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('gridAutoRows', () => {
  const expected = ['auto-rows-auto', 'auto-rows-fr']
  const regex = config.gridAutoRows.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('gap', () => {
  const expected = [
    'gap-10',
    'gap-x-10',
    'gap-y-10',
    'gap-0.5',
    'gap-x-0.5',
    'gap-px'
  ]
  const regex = config.gap.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('justifyContent', () => {
  const expected = [
    'justify-start',
    'justify-end',
    'justify-center',
    'justify-between',
    'justify-around',
    'justify-evenly'
  ]
  const regex = config.justifyContent.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('justifyItems', () => {
  const expected = [
    'justify-items-start',
    'justify-items-end',
    'justify-items-center',
    'justify-items-stretch'
  ]
  const regex = config.justifyItems.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('justifySelf', () => {
  const expected = [
    'justify-self-auto',
    'justify-self-start',
    'justify-self-end',
    'justify-self-center',
    'justify-self-stretch'
  ]
  const regex = config.justifySelf.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('alignContent', () => {
  const expected = [
    'content-center',
    'content-start',
    'content-end',
    'content-between',
    'content-around',
    'content-evenly'
  ]
  const regex = config.alignContent.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('alignItems', () => {
  const expected = [
    'items-start',
    'items-end',
    'items-center',
    'items-baseline',
    'items-stretch'
  ]
  const regex = config.alignItems.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('alignSelf', () => {
  const expected = [
    'self-auto',
    'self-start',
    'self-end',
    'self-center',
    'self-stretch'
  ]
  const regex = config.alignSelf.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('placeContent', () => {
  const expected = [
    'place-content-center',
    'place-content-start',
    'place-content-end',
    'place-content-between',
    'place-content-around',
    'place-content-evenly',
    'place-content-stretch'
  ]
  const regex = config.placeContent.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('placeItems', () => {
  const expected = [
    'place-items-start',
    'place-items-end',
    'place-items-center',
    'place-items-stretch'
  ]
  const regex = config.placeItems.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('placeSelf', () => {
  const expected = [
    'place-self-auto',
    'place-self-start',
    'place-self-end',
    'place-self-center',
    'place-self-stretch'
  ]
  const regex = config.placeSelf.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('table', () => {
  const expected = ['table', 'table-auto', 'table-fixed']
  const regex = config.table.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('borderCollapse', () => {
  const expected = ['border-collapse', 'border-separate']
  const regex = config.borderCollapse.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('transition', () => {
  const expected = ['transition', 'transition-all']
  const regex = config.transition.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('transitionDuration', () => {
  const expected = ['duration-10']
  const regex = config.transitionDuration.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('transitionTimingFunction', () => {
  const expected = ['ease-linear', 'ease-in-out']
  const regex = config.transitionTimingFunction.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('transitionDelay', () => {
  const expected = ['delay-10']
  const regex = config.transitionDelay.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('animation', () => {
  const expected = ['animate-spin']
  const regex = config.animation.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('tranform', () => {
  const expected = ['transform', 'transform-gpu', 'transform-none']
  const regex = config.transform.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('transformOrigin', () => {
  const expected = ['origin-center', 'origin-top-right']
  const regex = config.transformOrigin.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('scale', () => {
  const expected = ['scale-10', 'scale-x-10', 'scale-y-10']
  const regex = config.scale.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('rotate', () => {
  const expected = ['rotate-10', '-rotate-10']
  const regex = config.rotate.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('translate', () => {
  const expected = [
    'translate-x-10',
    'translate-x-0.5',
    'translate-y-10',
    'translate-y-1/2',
    '-translate-x-full'
  ]
  const regex = config.translate.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('skew', () => {
  const expected = ['skew-x-10', 'skew-y-10', '-skew-x-10']
  const regex = config.skew.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('text', () => {
  const expected = ['text-center', 'text-gray-100', 'text-opacity-10']
  const regex = config.text.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('textDecoration', () => {
  const expected = ['underline', 'line-through', 'no-underline']
  const regex = config.textDecoration.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('textTransform', () => {
  const expected = ['uppercase', 'lowercase', 'capitalize', 'normal-case']
  const regex = config.textTransform.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('textOverflow', () => {
  const expected = ['truncate', 'overflow-ellipsis', 'overflow-clip']
  const regex = config.textOverflow.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('verticalAlign', () => {
  const expected = ['align-baseline', 'align-text-bottom']
  const regex = config.verticalAlign.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('whitespace', () => {
  const expected = [
    'whitespace-normal',
    'whitespace-pre-wrap',
    'whitespace-pre-line',
    'whitespace-pre'
  ]
  const regex = config.whitespace.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('wordBreak', () => {
  const expected = ['break-normal', 'break-words', 'break-all']
  const regex = config.wordBreak.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('font', () => {
  const expected = ['font-sans', 'font-bold']
  const regex = config.font.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('fontStyle', () => {
  const expected = ['italic', 'not-italic']
  const regex = config.fontStyle.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('leading', () => {
  const expected = ['leading-10', 'leading-normal']
  const regex = config.leading.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('tracking', () => {
  const expected = ['tracking-normal']
  const regex = config.tracking.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('background', () => {
  const expected = [
    'bg-fixed',
    'bg-clip-text',
    'bg-gray-100',
    'bg-opacity-10',
    'bg-left-bottom',
    'bg-no-repeat',
    'bg-contain',
    'bg-gradient-to-t'
  ]
  const regex = config.background.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('gradientColorStops', () => {
  const expected = [
    'from-transparent',
    'from-gray-100',
    'via-gray-100',
    'to-gray-100'
  ]
  const regex = config.gradientColorStops.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('position', () => {
  const expected = ['static', 'fixed', 'absolute', 'relative', 'sticky']
  const regex = config.position.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})

test('inset', () => {
  const expected = [
    'top-10',
    '-left-10',
    'inset-10',
    '-inset-y-1',
    'right-3.5',
    'bottom-1/2'
  ]
  const regex = config.inset.regex
  const utility = testUtility(regex)
  expect(utility).toEqual(expect.arrayContaining(expected))
})
