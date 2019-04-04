import { getAcceptedTypes, getAcceptedText } from '../acceptedTypes'

describe('getAcceptedTypes()', () => {
  it('returns empty array by default', () => {
    expect(getAcceptedTypes('does-not-exist')).toEqual([])
  })
  it('returns correct array for documents', () => {
    expect(getAcceptedTypes('documents')).toEqual([
      '.txt',
      '.doc',
      '.docx',
      '.dot',
      '.dotx',
      '.docm',
      '.dotm',
      '.pdf'
    ])
  })
  it('returns correct array for images', () => {
    expect(getAcceptedTypes('images')).toEqual([
      'image/*',
    ])
  })
})

describe('getAcceptedText()', () => {
  it('returns empty string by default', () => {
    expect(getAcceptedText()).toBe('')
  })
  it('returns default when type does not exist', () => {
    expect(getAcceptedText('does-not-exist', 'foo-bar')).toBe('foo-bar')
  })
  it('returns correct text for documents', () => {
    expect(getAcceptedText('documents')).toBe('PDFs, Word docs and text files')
  })
  it('returns correct text for images', () => {
    expect(getAcceptedText('images')).toBe('Most image types accepted')
  })
})
