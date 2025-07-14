import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Star } from "lucide-react";
import Image from "next/image";

const packages = [
  {
    title: "Economy Hajj Package",
    duration: "20 Days",
    price: "$5,000",
    features: ["Standard Accommodation", "Group Transport", "Guided Tours", "Visa Processing"],
    image: "https://placehold.co/600x400.png",
    hint: "hajj crowd"
  },
  {
    title: "Deluxe Omrah Package",
    duration: "10 Days",
    price: "$3,500",
    features: ["4-Star Hotel near Haram", "Private Transport", "Exclusive Ziyarat", "Visa Processing"],
    image: "https://placehold.co/600x400.png",
    hint: "mecca night"
  },
  {
    title: "Premium Hajj Package",
    duration: "14 Days",
    price: "$9,000",
    features: ["5-Star Hotel overlooking Kaaba", "VIP Transport", "Personal Guide", "Express Visa"],
    image: "https://placehold.co/600x400.png",
    hint: "kaaba aerial"
  },
];

const faqs = [
    { q: "What documents are required?", a: "A valid passport for at least 6 months, passport-sized photos, and a vaccination certificate are required." },
    { q: "Are flights included?", a: "Yes, round-trip airfare from major international airports is included in all our packages." },
    { q: "What kind of guidance is provided?", a: "We provide experienced, multilingual guides who will be with your group throughout the pilgrimage." },
    { q: "Can I customize my package?", a: "Yes, we offer customization options for accommodation, transport, and duration. Please contact us for a personalized quote." }
]

export default function HajjOmrahPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-black/60">
        <Image
          src="https://placehold.co/1800x600.png"
          alt="Pilgrims at the Kaaba"
          fill
          className="absolute z-[-1] opacity-70 object-cover"
          data-ai-hint="mecca pilgrimage"
        />
        <div className="z-10 p-4">
          <Globe className="h-16 w-16 text-white mx-auto mb-4"/>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Hajj &amp; Omrah Services</h1>
          <p className="text-lg md:text-xl mt-2">Embark on a blessed journey with peace of mind.</p>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Pilgrimage Packages</h2>
            <p className="mt-2 text-lg text-muted-foreground">Tailored packages to suit your spiritual needs and budget.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.title} className="flex flex-col">
                <CardHeader>
                  <div className="relative aspect-[3/2] mb-4">
                    <Image src={pkg.image} data-ai-hint={pkg.hint} alt={pkg.title} fill className="rounded-lg object-cover"/>
                  </div>
                  <CardTitle className="flex items-center gap-2"><Star className="text-primary"/>{pkg.title}</CardTitle>
                  <CardDescription>{pkg.duration} | Starting from <span className="font-bold text-primary">{pkg.price}</span></CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Book Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-card">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
              <p className="mt-2 text-lg text-muted-foreground">Answers to common queries about our Hajj &amp; Omrah services.</p>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                         <AccordionItem key={index} value={`item-${index+1}`}>
                            <AccordionTrigger className="text-lg">{faq.q}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                            {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
         </div>
      </section>
    </div>
  );
}
