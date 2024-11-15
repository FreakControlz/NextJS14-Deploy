import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  paragraph: string;
  image: string;
  href: string;
};

const CardImage = ({ title, paragraph, image, href }: CardProps) => {
  return (
    <div className="hover:scale-[1.02] transition-all xl:w-[800px] drop-shadow-2xl rounded-3xl text-center bg-slate-100 relative overflow-hidden">
      <Link href={href}>
        <div className="relative w-full h-full pb-[60%]"> {/* Aspect ratio container */}
          <Image src={image} alt="logo" fill={true} objectFit="cover" className="rounded-3xl" />
        </div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-0 text-white drop-shadow-2xl z-10">
          <h2 className="bold-16 lg:bold-32">{title}</h2>
          <p className="regular-10 lg:regular-24">{paragraph}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardImage;
