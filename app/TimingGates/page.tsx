import Image from 'next/image'

export default function TimingGates() {
  return (
    <>
        <section className="min-w-screen min-h-screen  px-3">
            <div className="flex flex-col justify-center lg:max-w-[800px] mx-auto padding-container gap-3">
                <h1 className="text-xl font-bold">Photoelectric Optic Wireless Timing Gates</h1>
                <p>In sprinting accurate timing systems are an important factor for evaluating your performance. In top speed training this requires accuracy up to 0.001s at the most closest of finishes. In training athletes use such systems to accurately measure their sprinting performance and speed to improve their training quality.</p>
                <p>Alternative systems are available for purchase, but they are often between 400 to a 1000 euros. This was not in my track and fields team's budget. Therefore, I set out to create my own alternative timing system. The system consists of 2 modules, a starting module and a finish module. More of these modules can be added in between to potentially calculate more split times, but this documentation focuses only on the start and finish module.</p>
                <p>The base of the system is using a Photoelectric through-beam production line sensor from SICK. I acquired this sensor second hand for cheap. This option allowed for accurate tracking upto a frequency of a 1000hz. This also meant that I did not have to create my own photo electrc through-beam sensor, which could prove to be inaccurate. Any through-beam laser sensor can work for this project. </p>  
                <p>The list of hardware requirements for this projects are as follows:</p>
                <ul>
                  <li>2x Arduino Nano</li>
                  <li>2x SICK Photoeletric through-beam sensor or own DIY alternative</li>
                  <li>2x 1602 LCD screens</li>
                  <li>12 volt battery pack or alternatively 6x 18650 batteries</li>
                  <li>2x nrf24lo1 and power board modules</li>
                  <li>2x 9 volt batteries</li>
                  <li>2x 10 uF capacitors</li>
                  <li>4x Any Camera tripod</li>
                  <li>Some sort of housing/case</li>
                </ul>
                <p>I started with a very crude prototype to test the concept of the system, and to verify the connectivity between the two modules. This resulted in a version on a quick scrap piece of wood, where I quickly soldered all the parts together. This version was also tested on the track to test the range of the system. Theoretically the system is rated up to 1000 meters of range, but this proved to be inconsistent based on multiple forums. The tests on track showcased latency below 5 micro seconds.</p>

                <Image className='py-5'src="/Prototype1.jpg" alt="First Prototype" width={800} height={600} />

                <p> After proving the concept and testing the hardware I started modeling a final version of the system and started coding improvements to the code. This resulted in the following casing for the system: </p>
                <Image  className='py-5'src="/Case.png" alt="Case" width={800} height={600} />

                <p>I refined the casing for 3 iterations, with additions in small holding pieces of plastic and casings for the battery packs. I also provided a stabilizer for the antenna, which allowed for potential water proofing in the future.</p>
                <Image className='py-5'src="/Prototype.jpg" alt="Second Prototype" width={800} height={600} />

                <p>Once completely finished and debugging the codes with a few hickups along the way, the final system works correctly. This system was validated by a slowmotion camera setup from multiple phones to validate the system at 960 fps. The system came within 0.003 seconds of accuracy on average after 10 tests. This DIY system forms a proper alternative and mainly cheaper alternative than some of the competitors. I created this system for a total material cost of 90 euros. This system is now used on my track and field club on a weekly basis.</p>

                <Image className='py-5'src="/Gates.png" alt="ET" width={800} height={600} />
                
            </div>
        </section>
    </>
  );
}