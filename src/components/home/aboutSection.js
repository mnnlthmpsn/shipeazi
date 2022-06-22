import testImg from "../../images/testImg.png";

export const AboutSection = ({ toRoute }) => {
  return (
    <div className="bg-[#F5F7F9] kPaddingMedium grid lg:grid-cols-2 gap-16 items-center">
      <div className="flex items-center justify-center">
        <img src={testImg} alt="" className="img"/>
      </div>

      <div className="flex flex-col space-y-8">
        <p className="text-4xl font-semibold">About Shipeazi</p>
        <p>
          By choosing Shipeazi, you’re guaranteeing a great moving day. All
          customers receive transparent pricing, flexible service options,
          background-checked movers, industry-best customer support, and an
          easy-to-access online dashboard.
        </p>
        <div className="pt-6 w-2/3">
          <button className="btn-primary w-full" onClick={() => toRoute('/book')}>Book a move</button>
        </div>
      </div>
    </div>
  );
};
