import { Call, Send2, Sms } from 'iconsax-react'
import Line from '../assets/line-asset.svg'
import Button from './Button'
import { Input, Textarea } from '@material-tailwind/react'

const ContactUs = () => {
  return (
    <section id="contactUs" className="mt-20 flex flex-col gap-y-8 md:grid grid-cols-2">
      <div className="flex flex-col gap-y-4">
        <img src={Line} alt="asset line" className="mb-4 w-fit" />
        <h2 className="font-poppins text-[28px] text-primary max-w-[435px]">
          Feel Free to Contact Us via Phone, Email, or through the Contact Form.
        </h2>
        <div className="font-poppins font-normal text-gray-700 text-[16px] flex flex-col gap-y-4">
          <div>
            Contact Us for Immediate Support
            <div className="mt-2 flex items-center gap-x-2">
              <Call className="text-secondary" />
              +555 555 555
            </div>
          </div>
          <div>
            Write us by E-mail
            <div className="mt-2 flex items-center gap-x-2">
              <Sms className="text-secondary" />
              company@email.com
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-y-8">
        <Input variant="standard" label="Name" />
        <Input variant="standard" label="Email" />

        <div>
          <Textarea variant="standard" label="Message" />
        </div>

        <Button text={'Send Message'} onClick={(e) => e.preventDefault()}>
          <Send2 />
        </Button>
      </form>
    </section>
  )
}

export default ContactUs
