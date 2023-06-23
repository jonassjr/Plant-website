import { Plants } from '../constants/index'

import Line from '../assets/line-asset.svg'

const Guide = () => {
  return (
    <section className="pt-20">
      <img src={Line} alt="asset line" className="mb-4" />
      <h2 className="font-poppins text-[28px] text-primary">
        Need assistance in selecting the perfect plant? We're here to help! Explore our expert
        guidance.
      </h2>
      <div className="flex justify-center max-[1047px]:gap-x-8 min-[1048px]:justify-between  flex-wrap">
        {Plants.map((plant) => (
          <div
            key={plant.id}
            className="flex flex-col items-center justify-center py-[42px] px-[25px] rounded-3xl mt-8 bg-third-color gap-y-[20px]"
          >
            <img src={plant.img} alt="plant type" />
            <h3 className="font-poppins text-lg text-primary">{plant.tittle}</h3>
            <p className="font-poppins text-sm text-center text-gray-700 max-w-[278px]">
              {plant.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Guide
