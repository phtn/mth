'use client'
import { LottieComponentProps, useLottie } from "lottie-react";

import lottie from '../../public/lottie-files/globe.json'

export const Lottie = () => {

  const options: LottieComponentProps = {
    animationData: lottie,
    loop: true,
  }

  const style = {
    height: 60
  }

  const { View } = useLottie(options, style)

  return <>{View}</>
}