import testImg from "../../images/testImg.png";

export const AboutSection = ({ toRoute }) => {
  return (
    <div className="bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-0 py-16 items-center lg:py-24">
          <img src={testImg} alt="" className="img" />
          <div className="flex flex-col space-y-5">
            <p className="text-2xl md:text-4xl font-bold">Why Choose Us</p>
            <p>
              By choosing Shipeazi, you’re guaranteeing a great moving day. All
              customers receive transparent pricing, flexible service options,
              background-checked movers, industry-best customer support, and an
              easy-to-access online dashboard.
            </p>
            <div>
              <button className="btn-quote-sec">Book A Move</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
