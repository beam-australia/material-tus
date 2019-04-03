import { IconText, IconAudio, IconVideo, IconPDF, IconFile } from '../components/Icons'

export default function getIconByMime(fileType) {
  const defaultChoice = {
    color: '#666',
    icon: IconFile
  }

  if (!fileType) return defaultChoice

  const fileTypeGeneral = fileType.split('/')[0]
  const fileTypeSpecific = fileType.split('/')[1]

  if (fileTypeGeneral === 'text') {
    return {
      color: '#666',
      icon: IconText
    }
  }

  if (fileTypeGeneral === 'audio') {
    return {
      color: '#1abc9c',
      icon: IconAudio
    }
  }

  if (fileTypeGeneral === 'video') {
    return {
      color: '#2980b9',
      icon: IconVideo
    }
  }

  if (fileTypeGeneral === 'application' && fileTypeSpecific === 'pdf') {
    return {
      color: '#e74c3c',
      icon: IconPDF
    }
  }

  if (fileTypeGeneral === 'image') {
    return {
      color: '#666',
      icon: 'image'
    }
  }

  return defaultChoice
}
