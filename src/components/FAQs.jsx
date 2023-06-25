import { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import { questionsLeft, questionsRight } from '../constants'
import Line from '../assets/line-asset.svg'
import { Add, Minus } from 'iconsax-react'

const FAQs = () => {
  function Icon({ id, open }) {
    return (
      <>
        <Add className={`${id === open ? 'hidden' : 'block'}`} />
        <Minus className={`${id === open ? 'block' : 'hidden'}`} />
      </>
    )
  }

  const [open, setOpen] = useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <section id="faqs" className="pt-20">
      <img src={Line} alt="asset line" className="mb-4" />
      <h2 className="font-poppins text-[28px] text-primary max-w-[435px]">
        Unlocking the Mysteries Behind Common Questions
      </h2>
      <div className="flex flex-col md:grid grid-cols-2 mt-6 md:gap-x-10 gap-y-2">
        <div>
          {questionsRight.map((question) => (
            <Accordion
              key={question.id}
              open={open === question.id}
              icon={<Icon id={question.id} open={open} className="" />}
            >
              <AccordionHeader
                onClick={() => handleOpen(question.id)}
                className="text-primary text-lg font-poppins font-normal border-none mt-3 bg-third-color px-4 py-2"
              >
                {question.question}
              </AccordionHeader>
              <AccordionBody className="text-gray-700 font-poppins text-base pl-2">
                {question.answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
        <div>
          {questionsLeft.map((question) => (
            <Accordion
              key={question.id}
              open={open === question.id}
              icon={<Icon id={question.id} open={open} className="" />}
            >
              <AccordionHeader
                onClick={() => handleOpen(question.id)}
                className="text-primary text-lg font-poppins font-normal border-none mt-3 bg-third-color px-4 py-2"
              >
                {question.question}
              </AccordionHeader>
              <AccordionBody className="text-gray-700 font-poppins text-base pl-2">
                {question.answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs
