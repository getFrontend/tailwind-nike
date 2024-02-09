import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            className="m-0 w-[129px] h-[29px]"
            src={headerLogo}
            alt="logo image"
            width={129}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-xl:gap-8 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a className="font-montserrat leading-normal text-lg text-slate-gray" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a className="hover:text-coral-red" href="#!">Sign in</a>
          <span>/</span>
          <a className="hover:text-coral-red" href="#!">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger}
            alt="mobile menu"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav
