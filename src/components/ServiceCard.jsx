const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 w-full px-10 py-16 shadow-3xl rounded-[20px] sm:w-[350px] sm-:min-w-[350px]">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard