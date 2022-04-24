import testImg from "../../images/testImg.png";

export const HowItWorks = () => {
  return (
    <div className="kPadding py-10 lg:py-20 flex flex-col items-center">
      <p className="text-xl lg:text-4xl text-center font-semibold">
        You may be wondering how it works...
      </p>

      {/* first */}
      <div className="grid lg:grid-cols-2 mt-16 gap-16 items-center">
        <div className="flex items-center justify-center">
          <img src={testImg} alt="" />
        </div>
        <div className="space-y-3 flex flex-col items-start">
          <p className="text-xl font-semibold">
            Coast through our convenient booking process
          </p>
          <p className="tracking-wide lg:w-3/4">
            Tell us what you need—either online or over the phone—and in fewer
            than 15 minutes we can match you with the most-qualified team for
            your move.
          </p>
          <div className="flex-col lg:grid grid-cols-2 lg:w-4/5 space-y-3 lg:space-y-0 lg:flex w-full py-6 lg:gap-2 lg:pr-12">
            <button className="btn-primary w-full">Book a move</button>
            <button className="btn-secondary w-full">(233) 54 060 9437</button>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="grid lg:grid-cols-2 gap-16 mt-16 lg:mt-60 items-center">
        <div className="space-y-3 items-start flex flex-col">
          <p className="text-xl font-semibold">
            Receive ongoing guidance and support.
          </p>
          <p className="tracking-wide">
            Tell us what you need—either online or over the phone—and in fewer
            than 15 minutes we can match you with the most-qualified team for
            your move.
          </p>
          <div className="flex-col lg:grid grid-cols-2 lg:w-4/5 space-y-3 lg:space-y-0 lg:flex w-full py-6 lg:gap-2 lg:pr-12">
            <button className="btn-primary w-full">Book a move</button>
            <button className="btn-secondary w-full">(233) 54 060 9437</button>
          </div>
        </div>
        <div className="flex order-first lg:order-last">
          <img src={testImg} alt="" />
        </div>
      </div>

      {/* thrid */}
      <div className="grid lg:grid-cols-2 mt-16 lg:mt-60 gap-16 items-center">
        <div className="flex items-center justify-center">
          <img src={testImg} alt="" />
        </div>
        <div className="space-y-3 flex flex-col items-start">
          <p className="text-xl font-semibold">
            Relax while your Shipeazi pros get the job done
          </p>
          <p className="tracking-wide lg:w-3/4">
            Your lead Bellhop pro will get in touch on the day of your service
            to let you know your team is on the way. Once they arrive, they’ll
            conduct a brief walk-through, take note of any special instructions,
            and then get to work
          </p>
          <div className="flex-col lg:grid grid-cols-2 lg:w-4/5 space-y-3 lg:space-y-0 lg:flex w-full py-6 lg:gap-2 lg:pr-12">
            <button className="btn-primary w-full">Book a move</button>
            <button className="btn-secondary w-full">(233) 54 060 9437</button>
          </div>
        </div>
      </div>
    </div>
  );
};
