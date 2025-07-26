
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/our-team", label: "Our Team" },
  { href: "/about", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Logo />
        </div>
        
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href ? "text-gradient" : "text-muted-foreground hover:text-gradient"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        
        <div className="flex items-center gap-4">
          {/* <Button asChild className="hidden md:inline-flex" variant="ghost">
            <Link href="/admin/login">
              <LogIn className="mr-2 h-4 w-4" />
              Admin Login
            </Link>
          </Button> */}

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="flex h-full flex-col">
                  <div className="border-b p-4">
                    <Logo />
                  </div>
                  <nav className="flex-grow p-4">
                    <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted",
                            pathname === link.href ? "text-gradient" : "text-foreground",
                            "hover:text-gradient"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    </ul>
                  </nav>
                  {/* <div className="border-t p-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/admin/login" onClick={() => setMenuOpen(false)}>
                        <LogIn className="mr-2 h-4 w-4" />
                        Admin Login
                      </Link>
                    </Button>
                  </div> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
