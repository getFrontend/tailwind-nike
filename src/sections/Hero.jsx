import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <div id="home" className="w-full flex flex-col justify-center gap-10 min-h-screen max-container xl:flex-row">
      <div className="relative flex flex-col justify-center items-start pt-28 w-full max-xl:padding-x xl:w-2/5">
        <p className="text-xl font-montserrat text-coral-red">Our Summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>

        <Button
          label="Show now"
          iconURL={arrowRight}
        />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {/* Statistics block */}
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Image slider */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          className="object-contain relative z-10"
          src={bigShoe1}
          alt="nike shoe collection"
          width={610}
          height={502}
        />
      </div>
    </div>
  )
}

export default Hero
