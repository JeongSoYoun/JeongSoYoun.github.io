import React from 'react'
import { LinkedinIcon, TwitterIcon } from 'react-share'
import { LinkedinShareButton, TwitterShareButton } from 'react-share'

import './index.scss'

export const SocialShare = ({ title, author }) => {
  const text = `"${title}" written by @${author}`

  return (
    <div className="social-share">
      <TwitterShareButton url={window.location.href} title={text}>
        <TwitterIcon size={32} borderRadius={10} />
      </TwitterShareButton>
      <LinkedinShareButton url={window.location.href}>
        <LinkedinIcon size={32} borderRadius={10} style={{ marginLeft: 10 }} />
      </LinkedinShareButton>
    </div>
  )
}
