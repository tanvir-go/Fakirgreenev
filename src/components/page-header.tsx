import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  bgClassName?: string;
  bgImage?: string;
}

const PageHeader = ({ title, bgClassName, bgImage }: PageHeaderProps) => (
  <section 
    className={cn(
      "relative h-64 w-full rounded-b-3xl overflow-hidden flex flex-col items-center justify-center text-white text-center",
      !bgImage && (bgClassName || "bg-[#33A667]")
    )}
  >
    {bgImage && (
      <Image
        src={bgImage}
        alt={`${title} page header background`}
        fill
        className="object-cover"
        data-ai-hint="background image"
      />
    )}
    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
    <div className="relative z-10 p-6 w-full">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
    </div>
  </section>
);

export default PageHeader;
