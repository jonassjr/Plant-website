import { ArrowRight } from 'iconsax-react'

import Button from './Button'

import curves from '../assets/curves.svg'
import HeroImg from '../assets/hero-image.png'
import HeroImgAsset from '../assets/hero-asset.svg'
import Badge from '../assets/badge.svg'

const Hero = () => {
  return (
    <section className="grid items-center gap-y-10 gap-x-36 md:grid-cols-2">
      <div className="flex flex-col gap-y-4 text-center md:text-start max-w-[728px] mx-auto">
        <img src={curves} alt="asset img" className="hidden md:block w-[248px] h-25px" />
        <h1 className="text-[32px] sm:text-[48px] md:w-[548px] font-poppins text-primary">
          Enhance Your Life with the Power of Plants
        </h1>
        <p className="text-[16px] md:w-[328px] font-poppins text-gray-700">
          Transform your office or apartment with stunning plant designs that breathe life into your
          surroundings.
        </p>

        <Button text={'Explore'} styles={'self-center md:self-start'}>
          <ArrowRight variant="Broken" />
        </Button>
      </div>
      <div className="relative mx-auto md:mx-0">
        <img src={HeroImg} alt="hero Image" className="relative z-10" />
        <img src={HeroImgAsset} alt="hero image asset" className="absolute left-8 z-0 bottom-0" />
        <img src={Badge} alt="badge" className="absolute -bottom-14 -left-8 z-20 " />
      </div>
    </section>
  )
}

export default Hero
