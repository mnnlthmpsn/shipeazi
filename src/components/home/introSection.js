import { useNavigate } from "react-router-dom";

export const IntroSection = () => {

  const router = useNavigate()
  const toRoute = route => router(route)

  return (
    <div className="kPaddingLarge gap-16 items-center">
      <div className="flex flex-col space-y-3">
        <p className="text-blue-400">Shipeazi Moving</p>
        <div className="space-y-1 lg:space-y-3 text-4xl lg:text-5xl text-white font-semibold">
          <p>Moving made</p>
          <p>modern.</p>
        </div>
        <p className="lg:text-lg tracking-wide text-white">
          It doesn't have to be a hassle to make a moving plan. In minutes, get
          a free quote and book with $0 down. Then, manage every aspect of your
          move from your online dashboard.{" "}
        </p>
        <div className="pt-6 lg:pt-12 w-2/3">
          <button className="btn-primary w-full font-bold" onClick={() => toRoute('/book')}>Book a Move</button>
        </div>
      </div>
    </div>
  );
};
