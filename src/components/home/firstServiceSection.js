import { AdjustmentsIcon, BriefcaseIcon, HomeIcon } from "@heroicons/react/solid"

export const FirstServiceSection = () => {
  const services = [
    {
      icon: <HomeIcon className=" h-8 w-auto lg:h-16"/>,
      title: "Friendly",
      text: "Enjoy custom-tailored moving help that meets your needs, and receive thoughtful support every step of the way.",
    },
    {
      icon: <BriefcaseIcon className=" h-8 w-auto lg:h-16"/>,
      title: "Professional",
      text: "Our Shipeazi pros move quickly but carefully from start to finish. With 200,000 moves and a 4.8/5 rating under our belt, we believe attitude matters as much as muscle.",
    },
    {
      icon: <AdjustmentsIcon className=" h-8 w-auto lg:h-16"/>,
      title: "Efficient",
      text: "Reserve your service without the need for an in-home estimate. Manage your entire experience digitally on your online dashboard.",
    },
  ];
  return (
    <div className="kPaddingMedium flex flex-col items-center">
      <p className="text-2xl text-center lg:text-4xl font-semibold mb-10 lg:mb-20">
        Free yourself from the usual burdens of moving.
      </p>
      <div className="grid lg:grid-cols-3 space-8">
        {services.map((service) => (
          <CardBuilder service={service} />
        ))}
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
