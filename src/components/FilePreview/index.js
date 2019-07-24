import React from 'react'
import withTus from '../../lib/withTus'
import FilePreview from './FilePreview.js'

const WrappedFilePreview = ({ tus, ...props }) => {
  const { upload, uploading } = tus
  if (!upload || uploading) {
    return null
  }
  return (<FilePreview upload={upload} {...props} />)
}

export default withTus(WrappedFilePreview)
