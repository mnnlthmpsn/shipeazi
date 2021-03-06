import testImg from "../../images/testImg.png";

export const MoveNowSection = ({ toRoute }) => {
  return (
    <div className="grid lg:grid-cols-2 kPaddingLarge gap-16 items-center justify-center">
      <div className="flex items-center justify-center">
        <img src={testImg} alt="" />
      </div>
      <div className="space-y-3 flex flex-col items-start">
        <p className="text-xl font-semibold text-center">Now it's your move</p>
        <p className="tracking-wide lg:w-3/4">
          We understand that every move is unique, which is why you have the
          ability to tailor your services to best fit your needs. Not sure where
          to begin? Let us help you unpack your options.
        </p>
        <div className="flex-col lg:grid grid-cols-2 space-y-3 lg:space-y-0 lg:flex w-full py-6 lg:gap-2 lg:pr-12">
            <button className="btn-primary w-full" onClick={() => toRoute('/book')}>Book a move</button>
            <button className="btn-secondary w-full">(233) 54 060 9437</button>
          </div>
      </div>
    </div>
  );
};
