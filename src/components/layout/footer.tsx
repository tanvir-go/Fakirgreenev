
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-1">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Leading the way in green energy and sustainable solutions for a better tomorrow.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-primary">Destinations</Link></li>
              <li><Link href="/contact-us" className="text-muted-foreground hover:text-primary">Support</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gradient" />
                <span>+88027641309</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gradient" />
                <span>+8801763996144</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gradient" />
                <span>+8801754333344</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gradient" />
                <span>info@fakirgreenev.com</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-center">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:bg-gradient-primary hover:text-white rounded-full">
                <a href="https://www.facebook.com/share/1AtAEVUVBQ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:bg-gradient-primary hover:text-white rounded-full">
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:bg-gradient-primary hover:text-white rounded-full">
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:bg-gradient-primary hover:text-white rounded-full">
                <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FAKIR GREEN ENERGY & EV LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
