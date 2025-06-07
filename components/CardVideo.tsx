import BackgroundVideo from "next-video/background-video";
import Link from "next/link";	

type CardProps = {
  title: string;
  paragraph: string;
  source: string;
  href: string;
  className?: string;
};

const CardVideo = ({ className, title, paragraph, source = "/AI.mp4", href }: CardProps) => {
  console.log("CardVideo source:", source); // Add this line to log the source prop

  return (
    <div className="hover:scale-[1.02] transition-all xl:w-[800px] drop-shadow-2xl rounded-3xl text-center bg-slate-100 relative overflow-hidden">
      <Link href={href}>
        <div className="relative w-full pb-[60%]"> {/* Aspect ratio container */}
          {source && (
            <video
              src={source}
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl pointer-events-none ${className}`}
              autoPlay
              loop
              muted
            />
          )}
        </div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-0 text-white drop-shadow-2xl z-10">
          <h2 className="bold-16 lg:bold-32">{title}</h2>
          <p className="regular-10 lg:regular-24">{paragraph}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardVideo;
