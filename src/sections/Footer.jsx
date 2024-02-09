import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Nike logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-coral-red"
                key={index}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between flex-wrap gap-20 lg:gap-10">
          {footerLinks.map(section => (
            <div className="text-white font-montserrat" key={section.title}>
              <h4 className="mb-6 text-2xl font-medium leading-normal">{section.title}</h4>
              <ul className="text-white-400">
                {section.links.map(link => (
                  <li className="mt-3 text-base leading-normal" key={link.name}>
                    <a className="hover:text-coral-red" href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white-400 font-montserrat max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img
            className="m-0 rounded-full"
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
          />
          <p>Copyright. All rights reserved, 2024.</p>
        </div>
        <a className="hover:text-slate-gray" href="#!">Terms & Conditions</a>
      </div>
    </footer>
  )
}

export default Footer
