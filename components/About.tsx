import React from "react";
import CardVideo from "./CardVideo";
import CardImage from "./CardImage";

const About = () => {
  return (
    <section className="max-container padding-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 justify-between xl:flex-row gap-10  ">
      <CardImage   
          title="Custom Projects"
          paragraph="We ensure a high quality import service, with quality insurance and a full money back guarantee."
          image="/ET.png"/>
          
      
      <CardVideo   
          title="Sprinting"
          paragraph="We ensure a high quality import service, with quality insurance and a full money back guarantee."
          source="/Blockstart-black.mp4"/>
    </section>
  );
};

export default About;
