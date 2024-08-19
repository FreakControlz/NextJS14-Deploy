import Image from "next/image";

type CardProps = {
  title: string;
  paragraph: string;
  image: string;
};

const CardImage = ({title, paragraph, image }: CardProps) => {
  return (
    <div className="hover:scale-[1.02] transition-all xl:w-[800px] drop-shadow-2xl rounded-xl text-center bg-slate-100 relative">
      <Image src={image} alt="logo" fill={true} className="rounded-3xl overflow-hidden"/>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-0 text-white drop-shadow-2xl">
        <h2 className="bold-32">{title}</h2>
        <p className="regular-24">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardImage;
