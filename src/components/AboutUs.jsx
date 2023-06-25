import { ArrowRight } from 'iconsax-react'
import AboutImg from '../assets/about-img.png'
import Button from './Button'

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="flex flex-col-reverse place-items-center gap-y-16 gap-x-36 md:grid md:grid-cols-2"
    >
      <div className="md:place-self-start">
        <img src={AboutImg} alt="About Image" />
      </div>
      <div className="flex flex-col gap-y-4 text-center max-w-[728px] md:text-start">
        <h2 className="font-poppins text-[28px] text-primary">
          Get to Know Us & Why We're the Best Choice
        </h2>
        <p className="font-poppins text-gray-700 text-[16px]">
          Our unparalleled plant process and flawless delivery service have garnered an extensive
          collection of 4000+ authentic and unbiased reviews, confirming our customers' complete
          confidence in us
        </p>
        <Button text={'Shop Now'} styles={'self-center md:self-start'}>
          <ArrowRight variant="Broken" />
        </Button>
      </div>
    </section>
  )
}

export default AboutUs
