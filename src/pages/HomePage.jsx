import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Hero from "./homeSections/Hero";
import Steps from "./homeSections/Steps";
import WhyChooseIUs from "./homeSections/WhyChooseIUs";
import Investore from "./homeSections/Investore";
import InvestmentPlans from "./homeSections/InvestmentPlans";
import Review from "./homeSections/Review";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Steps />
      <WhyChooseIUs />
      <Investore />
      <InvestmentPlans />
      <Review />
    </MainLayout>
  );
};

export default HomePage;
