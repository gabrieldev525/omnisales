// React imports
import React from 'react'

// Third imports
import Lottie from 'react-lottie'

// Local imports
import notFound from '../../static/lottie/404.json'

export default function NotFound() {

  const notFound404 = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <Lottie options={notFound404}
        height={500}
        width={500}
      />
    </div>
  )
}
