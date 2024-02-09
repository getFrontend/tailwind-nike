import Button from "../components/Button"

const Subscribe = () => {
  return (
    <div id="contact-us"
      className="max-container flex justify-between items-center gap-10 max-lg:flex-col">
      <h3 className="text-4xl font-palanquin font-bold leading-[68px] lg:max-w-md">
        Sign Up for
        <span className='text-coral-red'> Updates </span>
        & Newsletter
      </h3>
      <div className="w-full p-2.5 flex gap-5 items-center max-sm:flex-col lg:max-w-[40%] lg:gap-2 sm:border sm:border-slate-gray rounded-full">
        <input className="input" type="text" placeholder="subscribe@nike.com" />
        <div className="flex flex-shrink-0 items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
