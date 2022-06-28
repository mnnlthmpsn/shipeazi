import { ClockIcon, LocationMarkerIcon, MapIcon } from "@heroicons/react/solid";

export const SecondServiceSection = () => {
  const services = [
    {
      icon: <ClockIcon className=" h-8 w-auto lg:h-16" />,
      title: "Hourly Labor",
      text: "Enjoy custom-tailored moving help that meets your needs, and receive thoughtful support every step of the way.",
    },
    {
      icon: <LocationMarkerIcon className=" h-8 w-auto lg:h-16" />,
      title: "Local Moving",
      text: "Our Shipeazi pros move quickly but carefully from start to finish. With 200,000 moves and a 4.8/5 rating under our belt, we believe attitude matters as much as muscle.",
    },
    {
      icon: <MapIcon className=" h-8 w-auto lg:h-16" />,
      title: "Long Distance Moving",
      text: "Reserve your service without the need for an in-home estimate. Manage your entire experience digitally on your online dashboard.",
    },
  ];
  return (
    <div className="bg-gray-100 py-10 lg:py-20 md:px-8 lg:px-0">
      <div className="container space-y-24">
        <p className="text-xl md:text-4xl text-center font-bold">Moving services we can coordinate for you</p>
        <div className="grid md:grid-cols-3 space-8">
          {services.map((service) => (
            <CardBuilder service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardBuilder = ({ service }) => {
  return (
    <div className="flex flex-col space-y-4 lg:space-y-8 lg:px-8 items-center pb-16 lg:pb-0">
      {service.icon}
      <p className="text-center text-xl font-semibold">{service.title}</p>
      <p className="text-center text-gray-500 tracking-wide">{service.text}</p>
    </div>
  );
};
