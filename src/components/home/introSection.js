import testImg from '../../images/testImg.png'

export const IntroSection = () => {
  return (
    <div className="kPaddingLarge grid lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col space-y-3">
        <p className="text-blue-400">Shipeazi Moving</p>
        <div className="space-y-1 lg:space-y-3 text-4xl lg:text-5xl font-semibold">
          <p>Moving made</p>
          <p>modern.</p>
        </div>
        <p className="lg:text-lg tracking-wide text-gray-500">
          It doesn't have to be a hassle to make a moving plan. In minutes, get
          a free quote and book with $0 down. Then, manage every aspect of your
          move from your online dashboard.{" "}
        </p>
        <div className="lg:w-2/5 pt-6 lg:pt-12">
        <button className="btn-primary w-full">See Pricing</button>
        </div>
      </div>
      <div className="flex order-first lg:order-last items-center justify-center">
        <img src={testImg} alt="" />
      </div>
    </div>
  );
};
