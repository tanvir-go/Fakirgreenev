import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  bgClassName?: string;
}

const PageHeader = ({ title, bgClassName }: PageHeaderProps) => (
  <section 
    className={cn(
      "relative h-64 w-full rounded-b-3xl overflow-hidden flex flex-col items-center justify-center text-white text-center px-4",
      bgClassName || "bg-[#33A667]" // Default to #33A667 if no bgClassName is provided
    )}
  >
    <div className="relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
    </div>
  </section>
);

export default PageHeader;
