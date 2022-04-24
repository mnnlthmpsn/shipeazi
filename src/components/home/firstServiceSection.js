export const FirstServiceSection = () => {
  const services = [
    {
      icon: "icon",
      title: "Friendly",
      text: "Enjoy custom-tailored moving help that meets your needs, and receive thoughtful support every step of the way.",
    },
    {
      icon: "icon",
      title: "Professional",
      text: "Our Shipeazi pros move quickly but carefully from start to finish. With 200,000 moves and a 4.8/5 rating under our belt, we believe attitude matters as much as muscle.",
    },
    {
      icon: "icon",
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
    <div className="flex flex-col space-y-4 lg:px-8 items-center">
      <p>icon</p>
      <p className="text-center text-xl font-semibold">{service.title}</p>
      <p className="text-center text-gray-500 tracking-wide">{service.text}</p>
    </div>
  );
};
