import Image from 'next/image'

export default function TimingGates() {
  return (
    <>
        <section className="min-w-screen min-h-screen  px-3">
            <div className="flex flex-col justify-center lg:max-w-[800px] mx-auto padding-container gap-3">
                <h1 className="text-xl font-bold">AI GAIT tracking</h1>
                <p>With athletes the tracking of their biomechanics is very important. Every tenth of a second can change the race's outcome. However, with larger groups of athletes the analysis of sprinting techniques becomes very time consuming. Therefore, this project aims to achieve an AI Model that tracks position of all important points of interest for the sprinting technique. It aims to identify the important Kinogram positions and create a representive view of the sprinting technique in an efficient manner. 
                </p> 
                <Image className='py-5'src="/Kinogram.png" alt="Kinogram" width={800} height={600} />
                <p>Now this is still a work in project due to the large amount of video's required of specific sprint work. The AI analysis of the most important point of interest around the ball of the feet is still too unaccurate to track properly.</p>
            </div>
        </section>
    </>
  );
}