import testImg from "../../images/testImg.png";

export const HowItWorks = () => {
  return (
    <div className="bg-white pb-10 lg:pb-20">
      <div className="container">
        <p className="text-xl md:text-4xl text-center font-bold py-10 lg:py-20">
          You may be wondering how it works...
        </p>

        <div className="flex-col flex space-y-24 lg:space-y-32">
          <div className="grid md:grid-cols-2 items-center gap-16 lg:gap-0">
            <img src={testImg} alt="" className="img" />
            <div className="flex flex-col space-y-6">
              <p className="text-xl font-semibold">"Coast through our Convenient Booking Process"</p>
              <p className="tracking-wide">
                Tell us what you need—either online or over the phone—and in fewer
                than 15 minutes we can match you with the most-qualified team for
                your move.
              </p>
              <div className="grid lg:grid-cols-2 gap-4">
                <button className="btn-quote-sec">Book a Move</button>
                <button className="btn-quote-info">Give us a call</button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-16 lg:gap-0">
            <div className="flex md:justify-end md:order-last">
              <img src={testImg} alt="" className="img" />
            </div>
            <div className="flex flex-col space-y-6">
              <p className="text-xl font-semibold">"Receive ongoing guidance and support"</p>
              <p className="tracking-wide">
                Our team of professionals are ready to listen and assist with whatever issues you may have.
                Reach out to us with your questions and thoughts and we will gladly assist by providing
                guidance, suggestions and support to make your move a truly hassle-free movement
              </p>
              <div className="grid lg:grid-cols-2 gap-4">
                <button className="btn-quote-sec">Book a Move</button>
                <button className="btn-quote-info">Give us a call</button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-16 lg:gap-0">
            <img src={testImg} alt="" className="img" />
            <div className="flex flex-col space-y-6">
              <p className="text-xl font-semibold">"Relax while your Shipeazi pros get the job done"</p>
              <p className="tracking-wide">
                Your lead Shipeazi pro will get in touch on the day of your service
                to let you know your team is on the way. Once they arrive, they’ll
                conduct a brief walk-through, take note of any special instructions,
                and then get to work
              </p>
              <div className="grid lg:grid-cols-2 gap-4">
                <button className="btn-quote-sec">Book a Move</button>
                <button className="btn-quote-info">Give us a call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
