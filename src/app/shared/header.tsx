import { Fragment, memo, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";

import logoLong from '../../assets/images/logo_long.jpg'

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { name: "Services", route: "services" },
    { name: "Become a Mover", route: "become-a-mover" },
    { name: "Help Center", route: "help" },
    { name: "About", route: "about" },
  ];

  const router = useNavigate()

  return useMemo(() => {
    return (
      <Fragment>
        <div className="h-24 bg-white shadow fixed inset-0 z-30 flex justify-between kPadding items-center">
          <div className="text-3xl font-semibold">
            <img src={logoLong} alt="logo" className="h-16 w-auto cursor-pointer" onClick={() => router('/')} />
          </div>
          <div className="lg:hidden">
            {toggle === false && (
              <MenuAlt2Icon
                className="h-6 w-auto"
                onClick={() => setToggle(!toggle)}
              />
            )}
            {toggle === true && (
              <XIcon className="h-6 w-auto" onClick={() => setToggle(!toggle)} />
            )}
          </div>
          <div className="hidden lg:flex space-x-2">
            {links.map((link) => (
              <p className="menu-link" key={link.route}>
                {link.name}
              </p>
            ))}
          </div>
          <div className="hidden lg:flex space-x-4 items-center">
            <button className="btn-quote">Track Shipment</button>
          </div>
        </div>

        {/* mobile menu*/}
        <div
          className={`lg:hidden fixed bg-gray-50 z-20 duration-300 ${toggle === true ? "opacity-100 h-screen w-screen" : "opacity-0 hidden"
            }`}
        >
          <div className="h-24"></div>
          <div className="flex-col p-8 space-y-2">
            {
              links.map(link => (
                <p className="text-md menu-link" key={link.route}>{link.name}</p>
              ))
            }
            <p className="menu-link">(233) 54 060 9437</p>
            <div className={`space-y-3 ${toggle === true ? 'opacity-100' : 'opacity-0'}`}>
              <button className="btn-quote-sec">Book a Move</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }, [])
};
