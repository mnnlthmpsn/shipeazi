import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  AboutSection,
  FirstServiceSection,
  HowItWorks,
  IntroSection,
  MoveNowSection,
  NumberSection,
  SecondServiceSection,
  Testimonial,
} from "../components/home";
import { Slider } from "../components/home/slider";
import { Header } from "../components/shared";

export const Home = () => {

  const toRoute = route => router(route)
  const router = useNavigate()

  return (
    <Fragment>
      <Header toRoute={toRoute} />
      <Slider />
      <AboutSection toRoute={toRoute} />
      <FirstServiceSection />
      <Testimonial />
      <NumberSection />
      <HowItWorks toRoute={toRoute} />
      <SecondServiceSection />
      <MoveNowSection toRoute={toRoute} />
    </Fragment>
  );
};
