import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Frazon',
  description: 'Portfolio website for Florian van der Dussen',
}


export default function Home() {
  return (
    <>
          <Hero />
          <About/> 
          <Contact/>        
    </>
  );
}
