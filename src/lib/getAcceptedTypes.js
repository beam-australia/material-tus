import get from 'lodash/get'

const types = {
  documents: {
    helperText: 'PDFs, Word docs and text files',
    mime: [
      '.txt',
      '.doc',
      '.docx',
      '.dot',
      '.dotx',
      '.docm',
      '.dotm',
      '.pdf'
    ],
  },
  images: {
    helperText: 'Most image types accepted',
    mime: [
      'image/*',
    ]
  }
}

export function getAcceptedTypes(type = '') {
  return get(types, `${type}.mime`, [])
}

export function getAcceptedText(type = '') {
  return get(types, `${type}.helperText`, '')
}
