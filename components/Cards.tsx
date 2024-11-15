import React from "react";
import CardVideo from "./CardVideo";
import CardImage from "./CardImage";

const Cards = () => {
  return (
    <section className="max-container padding-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 justify-between xl:flex-row gap-10  ">
      <CardImage   
          title="Custom Projects"
          paragraph=""
          image="/ET.png"
          href="/projects"/>
          
      
      <CardVideo   
          title="Sprinting"
          paragraph="Sprint training schedule for the week."
          source='https://www.florianvanderdussen.nl/Blockstart-black.mp4'
          href="/sprinting"/>
    </section>
  );
};

export default Cards;
