import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="max-container padding-container relative py-10 lg:mb-10 lg:py-20 xl:mb-20 justify-between xl:flex-row gap-10 ">
      <h1 className="bold-52 lg:bold-80 text-center">Contact me!</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
