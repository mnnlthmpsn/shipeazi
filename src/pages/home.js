import { Fragment } from "react";
import {
  AboutSection,
  FirstServiceSection,
  HowItWorks,
  SecondServiceSection,
  ServicesSection,
  Testimonial,
} from "../components/home";
import { Slider } from "../components/home/slider";
import { Footer, Header } from "../components/shared";

export const Home = () => {

  return (
    <Fragment>
      <Header />
      <Slider />
      <AboutSection />
      <ServicesSection />
      <FirstServiceSection />
      <Testimonial />
      {/* <NumberSection /> */}
      <HowItWorks />
      <SecondServiceSection />
      <Footer />
    </Fragment>
  );
};
