import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="flex-row bg-neutral-900 py-20">
      <ul className="flex justify-center gap-10">
        <div className="flex gap-10  my-2">
          <li className="text-white cursor-pointer hover:bold-16">Home</li>
          <li className="text-white cursor-pointer  hover:bold-16">About</li>
          <li className="text-white cursor-pointer  hover:bold-16">Contact</li>
        </div>
      </ul>
      <ul className="flex gap-10 justify-center py-5 ">
        <Image className="hover:scale-105 cursor-pointer" src="/facebook.svg" alt="facebook" width={32} height={32} />
        <Image className="hover:scale-105 cursor-pointer" src="/instagram.svg" alt="instagram" width={32} height={32} />
        <Image className="hover:scale-105 cursor-pointer" src="/linkedin.svg" alt="instagram" width={32} height={32} />
      </ul>
    </section>
  );
};

export default Footer;
