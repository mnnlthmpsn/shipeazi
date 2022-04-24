export const Header = () => {
  const links = [
    { name: "Services", route: "/services" },
    { name: "Locations", route: "/locations" },
    { name: "About", route: "/about" },
    { name: "Become a Mover", route: "/locations" },
  ];
  return (
    <div className="h-24 bg-white sticky inset-0 flex justify-between kPadding items-center">
      <div className="text-3xl font-semibold">Shipeazi</div>
      <div className="lg:hidden">toggle</div>
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
  );
};
