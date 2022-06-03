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
      <Slider />
      <Header toRoute={toRoute} />
      <IntroSection toRoute={toRoute} />
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
