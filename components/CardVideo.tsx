import Video from "next-video";
import BackgroundVideo from "next-video/background-video";


type CardProps = {
  title: string;
  paragraph: string;
  source?: string;
};

const CardVideo = ({ title, paragraph, source }: CardProps) => {
  return (
    <div className="hover:scale-[1.02] transition-all xl:w-[800px] drop-shadow-2xl rounded-xl text-center bg-slate-100 relative">
      <BackgroundVideo
        src={source}
        className="absolute rounded-3xl overflow-hidden"
      />
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-0 text-white drop-shadow-2xl">
        <h2 className="bold-32">{title}</h2>
        <p className="regular-24">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardVideo;
