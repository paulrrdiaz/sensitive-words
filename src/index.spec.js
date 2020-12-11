import { sensitiveWords } from '.'

test('replaces blacklisted words with asterisks', () => {
  expect(
    sensitiveWords('The name of the NX will be te Nintento Switch', ['switch'])
  ).toBe('The name of the NX will be te Nintento ***')
})

test('replaces blacklisted words with asterisks in two places', () => {
  expect(
    sensitiveWords(
      'The name of the NX will be te Nintento Switch. The switch will be awesome!',
      ['switch']
    )
  ).toBe('The name of the NX will be te Nintento ***. The *** will be awesome!')
})
