"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Recycle, HeartHandshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/HeroSection.png"
          alt="Green Energy"
          fill
          className="object-cover"
          data-ai-hint="hero background image"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10 p-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 drop-shadow-lg">Empowering the Future with Clean Energy and Smart Mobility</h1>
          <Button asChild size="lg" className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact-us">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Welcome to FAKIR GREEN ENERGY & EV LIMITED</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              FAKIR GREEN ENERGY & EV LIMITED is dedicated to accelerating the global transition to sustainable energy. Our mission is to provide innovative green technology and reliable EV solutions, creating a cleaner, healthier planet for future generations. We envision a world powered by renewable sources and connected by sustainable transport.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Button asChild variant="outline">
                    <Link href="/about">About Us</Link>
                </Button>
                <Button asChild>
                    <Link href="/services">Services</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/projects">Projects</Link>
                </Button>
                <Button asChild>
                    <Link href="/contact-us">Contact</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Highlights of Key Projects</h2>
            <p className="mt-2 text-lg text-muted-foreground">Real-world impact through innovative projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="overflow-hidden group">
                  <Image src="/Picture3.png" data-ai-hint="solar farm" alt="Solar Farm Project" width={600} height={400} className="w-full object-cover group-hover:scale-105 transition-transform" />
                  <CardHeader>
                      <CardTitle>Solar Water Pump</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">In collaboration with Pulse Bangladesh, we installed a solar water pump at a BGB camp, providing a sustainable water source.</p>
                  </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="overflow-hidden group">
                  <Image src="https://placehold.co/600x400.png" data-ai-hint="city EV charging" alt="Urban EV Charging Network" width={600} height={400} className="w-full object-cover group-hover:scale-105 transition-transform" />
                  <CardHeader>
                      <CardTitle>7 Set System Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">Partnering with Concern Worldwide, we installed a 7-set solar system in the Rohingya Camp, bringing clean energy to the community.</p>
                  </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="overflow-hidden group">
                  <Image src="https://placehold.co/600x400.png" data-ai-hint="wind turbines field" alt="Coastal Wind Energy Farm" width={600} height={400} className="w-full object-cover group-hover:scale-105 transition-transform" />
                  <CardHeader>
                      <CardTitle>4 Set System Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">In partnership with Relief International, we deployed a 4-set solar system in the Rohingya Camp, enhancing access to reliable power.</p>
                  </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Impact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Sustainability Impact</h2>
            <p className="mt-2 text-lg text-muted-foreground">Making a measurable difference for our planet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="p-6">
                  <Recycle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-4xl font-bold">1.2M+</h3>
                  <p className="text-muted-foreground mt-2">Tons of CO2 Reduced</p>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="p-6">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-4xl font-bold">800 GWh</h3>
                  <p className="text-muted-foreground mt-2">Clean Energy Generated</p>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="p-6">
                  <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-4xl font-bold">50,000+</h3>
                  <p className="text-muted-foreground mt-2">Homes & Businesses Powered</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
            <p className="mt-2 text-lg text-muted-foreground">Stories of success and collaboration.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="flex flex-col">
                  <CardContent className="p-6 flex-grow">
                      <div className="flex items-center mb-4">
                          <Avatar className="h-12 w-12 mr-4">
                              <AvatarImage src="/Demo.png" data-ai-hint="portrait woman" />
                              <AvatarFallback>OC</AvatarFallback>
                          </Avatar>
                          <div>
                              <h4 className="font-semibold">Our Client</h4>
                              <p className="text-sm text-muted-foreground">CEO, Company</p>
                          </div>
                      </div>
                      <p className="italic text-muted-foreground">"FAKIR GREEN ENERGY & EV LIMITED's solutions have been a game-changer for our sustainability goals. Professional, efficient, and truly impactful."</p>
                  </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="flex flex-col">
                  <CardContent className="p-6 flex-grow">
                      <div className="flex items-center mb-4">
                          <Avatar className="h-12 w-12 mr-4">
                              <AvatarImage src="/Demo.png" data-ai-hint="portrait man" />
                              <AvatarFallback>OC</AvatarFallback>
                          </Avatar>
                          <div>
                              <h4 className="font-semibold">Our Client</h4>
                              <p className="text-sm text-muted-foreground">CEO, Company</p>
                          </div>
                      </div>
                      <p className="italic text-muted-foreground">"The EV fleet charging system they installed has streamlined our operations and significantly cut our fuel costs. Highly recommended."</p>
                  </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <Card className="flex flex-col">
                  <CardContent className="p-6 flex-grow">
                      <div className="flex items-center mb-4">
                          <Avatar className="h-12 w-12 mr-4">
                              <AvatarImage src="/Demo.png" data-ai-hint="portrait person" />
                              <AvatarFallback>OC</AvatarFallback>
                          </Avatar>
                          <div>
                              <h4 className="font-semibold">Our Client</h4>
                              <p className="text-sm text-muted-foreground">CEO, Company</p>
                          </div>
                      </div>
                      <p className="italic text-muted-foreground">"The commercial solar installation was seamless. Their team handled everything, and we're already seeing a great return on investment."</p>
                  </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News & Updates Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Latest News & Updates</h2>
            <p className="mt-2 text-lg text-muted-foreground">Stay informed about our journey and the future of green tech.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group flex flex-col">
                <Image src="https://placehold.co/600x400.png" data-ai-hint="conference presentation" alt="Tech Conference" width={600} height={400} className="w-full object-cover" />
                <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Event</Badge>
                    <CardTitle>FGH at the Global Clean Energy Summit</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">We're excited to announce our participation in this year's summit, showcasing our latest innovations.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" asChild className="p-0 h-auto"><Link href="#">Read More</Link></Button>
                </CardFooter>
            </Card>
             <Card className="overflow-hidden group flex flex-col">
                <Image src="https://placehold.co/600x400.png" data-ai-hint="new technology" alt="New battery technology" width={600} height={400} className="w-full object-cover" />
                <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Innovation</Badge>
                    <CardTitle>Breakthrough in Battery Storage Tech</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">Our R&D team has developed a new battery that increases efficiency by 20%.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" asChild className="p-0 h-auto"><Link href="#">Read More</Link></Button>
                </CardFooter>
            </Card>
             <Card className="overflow-hidden group flex flex-col">
                <Image src="https://placehold.co/600x400.png" data-ai-hint="community" alt="Community solar project" width={600} height={400} className="w-full object-cover" />
                <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Partnership</Badge>
                    <CardTitle>New Community Solar Program Launched</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">Partnering with local communities to provide accessible solar energy for all.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" asChild className="p-0 h-auto"><Link href="#">Read More</Link></Button>
                </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
