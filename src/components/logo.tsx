import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";

export function Logo({className}: {className?: string}) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="FAKIR GREEN ENERGY & EV LIMITED Home">
      <Image src="/FakirgreenLogo.png" alt="Fakir Green EV Logo" width={40} height={40} className="h-10 w-auto" />
      <span className={cn("text-lg font-bold tracking-tight text-primary group-data-[state=collapsed]:hidden", className)}>
        FAKIR GREEN ENERGY & EV LIMITED
      </span>
    </Link>
  );
}
