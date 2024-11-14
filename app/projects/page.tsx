import CardImage from "../../components/CardImage";
import CardVideo from "../../components/CardVideo";
export default function Projects() {
  return (
    <>
            <section className="max-container padding-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 justify-between xl:flex-row gap-10  ">
                <CardImage   
                    title="Photoelectric Optic Electronic timing gates"
                    paragraph="Wireless timing gates system for sprinters."
                    image="/Gates.png"
                    href="/TimingGates"/>
                    
                
                <CardVideo   
                    title="AI pose recognition"
                    paragraph="Custom trained AI model for GAIT analysis of sprinters. (Work in progress)"
                    source="/AI.mp4"
                    href="/sprinting"/>
            </section>
    </>
  );
}


