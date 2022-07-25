import { Fragment } from "react";
import {
  AboutSection,
  FirstServiceSection,
  HowItWorks,
  SecondServiceSection,
  ServicesSection,
  Testimonial,
  Partner
} from "./components"
import { Slider } from "./components/slider";
import { SharedLayout } from "../../shared";

export const Home = () => {

  return (
    <SharedLayout>
      <Fragment>
        <Slider />
        <AboutSection />
        <ServicesSection />
        <FirstServiceSection />
        <Testimonial />
        <HowItWorks />
        <SecondServiceSection />
        <Partner />
      </Fragment>
    </SharedLayout>
  );
};

export default Home
