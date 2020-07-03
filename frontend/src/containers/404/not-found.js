import React from 'react'
import Lottie from 'react-lottie'

import notFound from '../../static/lottie/404.json'

export default function NotFound() {

  const not = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <Lottie options={not}
        height={500}
        width={500}
      />
    </div>
  )
}
