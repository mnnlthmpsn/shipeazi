import { Fragment, useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import logoLong from '../../images/logo_long.jpg'

export const Header = ({ toRoute }) => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { name: "Services", route: "/services" },
    { name: "Become a Mover", route: "#" },
    { name: "Divisions", route: "#" },
    { name: "Ecommerce", route: "#" },
    { name: "Help Center", route: "#" },
    { name: "About", route: "#" },
  ];

  return (
    <Fragment>
      <div className="h-24 bg-white shadow fixed inset-0 z-30 flex justify-between kPadding items-center">
        <div className="text-3xl font-semibold">
          <img src={logoLong} alt="logo" className="h-16 w-auto" />
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
          <button className="btn-quote" onClick={() => toRoute('/book')}>Track Shipment</button>
        </div>
      </div>

      {/* mobile menu*/}
      <div
        className={`lg:hidden fixed bg-gray-50 z-20 duration-300 ${toggle === true ? "opacity-100 h-screen" : "opacity-0 hidden"
          }`}
      >
        <div className="h-24"></div>
        <div className="flex-col p-8 space-y-2">
          {
            links.map(link => (
              <p className="text-lg menu-link">{link.name}</p>
            ))
          }
          <p className="menu-link">(233) 54 060 9437</p>
          <div className={`space-y-3 ${toggle === true ? 'opacity-100' : 'opacity-0' }`}>
            <button className="btn-secondary w-2/3">My Reservations</button>
            <button className="btn-primary w-2/3" onClick={() => toRoute('/book')}>Book a Move</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
