import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <div id="about-us"
      className="flex justify-between items-center gap-10 w-full max-container max-lg:flex-col">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold capitalize text-4xl lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality </span> Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 info-text lg:max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="nike shoe8 model" width={570} height={522}
          className="object-contain" />
      </div>
    </div>
  )
}

export default SuperQuality
