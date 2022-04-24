import { Fragment } from "react";
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
import { Header } from "../components/shared";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <IntroSection />
      <AboutSection />
      <FirstServiceSection />
      <Testimonial />
      <NumberSection />
      <HowItWorks />
      <SecondServiceSection />
      <MoveNowSection />
    </Fragment>
  );
};
