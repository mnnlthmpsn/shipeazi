import { Fragment, useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { name: "Services", route: "/services" },
    { name: "Locations", route: "/locations" },
    { name: "About", route: "/about" },
    { name: "Become a Mover", route: "/locations" },
  ];
  return (
    <Fragment>
      <div className="h-24 bg-white sticky inset-0 flex justify-between kPadding items-center">
        <div className="text-3xl font-semibold">Shipeazi</div>
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
          <p className="menu-link">(233) 54 060 9437</p>
        </div>
        <div className="hidden lg:flex space-x-4 items-center">
          <p className="menu-link">My reservations</p>
          <button className="btn-secondary">Book a move</button>
        </div>
      </div>

      {/* mobile menu*/}
      <div
        className={`lg:hidden fixed h-screen w-screen bg-gray-50 z-20 duration-300 ${
          toggle === true ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex-col p-8 space-y-2">
          {
            links.map(link => (
              <p className="text-lg menu-link">{link.name}</p>
            ))
          }
          <p className="menu-link">(233) 54 060 9437</p>
          <button className="btn-secondary w-2/3">My Reservations</button>
          <button className="btn-primary w-2/3">Book a Move</button>
        </div>
      </div>
    </Fragment>
  );
};
