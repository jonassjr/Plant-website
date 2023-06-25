import logo2 from '../assets/logo2.svg'
import { footerLinks } from '../constants'
import styles from '../styles'
import Button from './Button'

const Footer = () => {
  return (
    <section className={`mt-20 py-10  ${styles.container}`}>
      <div className="border-b flex flex-col gap-y-10 md:flex-row md:justify-between py-10">
        <div className="font-poppins">
          <img src={logo2} alt="footer logo" className="w-fit" />
          <p className=" mt-4 text-base w-[180px] text-white">Subscribe to our newsletter</p>
          <form className="max-w-[328px] mt-4 relative">
            <input
              type="email"
              placeholder="exemple@email.com"
              className="py-[15px] pl-4 pr-[130px] text-primary rounded-[15px] outline-none
               bg-third-color placeholder:text-gray-600 placeholder:text-xs md:placeholder:text-sm text-sm w-full"
            />
            <Button
              onClick={(e) => e.preventDefault()}
              text={'Subscribe'}
              styles={'absolute top-[3px] text-sm right-[3px]'}
            />
          </form>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title}>
              <h4 className="font-poppins text-white font-bold">{footerLink.title}</h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, i) => (
                  <li key={link.name} className="text-white font-poppins cursor-pointer">
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="font-poppins text-white flex justify-end py-4">
        © 2023 Plantas inc. All rights reserved
      </p>
    </section>
  )
}

export default Footer
