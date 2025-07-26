
"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Recycle, HeartHandshake, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
          <Image
            src="/HeroSection.png"
            alt="Green Energy"
            fill
            priority
            className="object-cover"
            data-ai-hint="hero background image"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 p-4 max-w-4xl mx-auto flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 drop-shadow-lg md:leading-[1.2]">Empowering the Future with Clean Energy and Smart Mobility</h1>
            <Button asChild size="lg" className="mt-4 bg-gradient-primary hover:opacity-90">
              <Link href="/contact-us">Get Started</Link>
            </Button>
          </motion.div>
        </section>

        {/* Intro Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-background"
        >
          <div className="container mx-auto px-4 text-center max-w-4xl">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-headline">Welcome to FAKIR GREEN ENERGY & EV LIMITED</motion.h2>
              <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground">
                FAKIR GREEN ENERGY & EV LIMITED is dedicated to accelerating the global transition to sustainable energy. Our mission is to provide innovative green technology and reliable EV solutions, creating a cleaner, healthier planet for future generations. We envision a world powered by renewable sources and connected by sustainable transport.
              </motion.p>
              <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild variant="outline" className="hover:bg-gradient-primary hover:text-primary-foreground">
                      <Link href="/about">About Us</Link>
                  </Button>
                  <Button asChild className="bg-gradient-primary hover:opacity-90">
                      <Link href="/services">Services</Link>
                  </Button>
                  <Button asChild variant="outline" className="hover:bg-gradient-primary hover:text-primary-foreground">
                      <Link href="/projects">Projects</Link>
                  </Button>
                  <Button asChild className="bg-gradient-primary hover:opacity-90">
                      <Link href="/contact-us">Contact</Link>
                  </Button>
              </motion.div>
          </div>
        </motion.section>

        {/* Key Projects Section */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-card"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-headline">Highlights of Key Projects</motion.h2>
              <motion.p variants={itemVariants} className="mt-2 text-lg text-muted-foreground">Real-world impact through innovative projects.</motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden group h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image src="/cng.jpg" data-ai-hint="solar farm" alt="Solar Farm Project" fill className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <CardHeader>
                        <CardTitle>Electric Vehicle (EV) Support</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Led the development and implementation of infrastructure and policy support for electric vehicles, including charging station deployment, regulatory alignment, and stakeholder engagement to accelerate EV adoption and sustainability goals.</p>
                    </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden group h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                     <div className="relative aspect-video">
                      <Image src="/project2.jpg" data-ai-hint="city EV charging" alt="Urban EV Charging Network" fill className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <CardHeader>
                        <CardTitle>7 Set System Installation</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Partnering with Concern Worldwide, we installed a 7-set solar system in the Rohingya Camp, bringing clean energy to the community.</p>
                    </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden group h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                     <div className="relative aspect-video">
                      <Image src="https://placehold.co/600x400.png" data-ai-hint="wind turbines field" alt="Coastal Wind Energy Farm" fill className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <CardHeader>
                        <CardTitle>4 Set System Installation</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">In partnership with Relief International, we deployed a 4-set solar system in the Rohingya Camp, enhancing access to reliable power.</p>
                    </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Sustainability Impact Section */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-background"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-headline">Our Sustainability Impact</motion.h2>
              <motion.p variants={itemVariants} className="mt-2 text-lg text-muted-foreground">Making a measurable difference for our planet.</motion.p>
            </div>
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="p-6 h-full">
                    <Recycle className="h-12 w-12 text-gradient mx-auto mb-4" />
                    <h3 className="text-4xl font-bold">1.2M+</h3>
                    <p className="text-muted-foreground mt-2">Tons of CO2 Reduced</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="p-6 h-full">
                    <Lightbulb className="h-12 w-12 text-gradient mx-auto mb-4" />
                    <h3 className="text-4xl font-bold">800 GWh</h3>
                    <p className="text-muted-foreground mt-2">Clean Energy Generated</p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="p-6 h-full">
                    <HeartHandshake className="h-12 w-12 text-gradient mx-auto mb-4" />
                    <h3 className="text-4xl font-bold">50,000+</h3>
                    <p className="text-muted-foreground mt-2">Homes & Businesses Powered</p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-card"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</motion.h2>
              <motion.p variants={itemVariants} className="mt-2 text-lg text-muted-foreground">Stories of success and collaboration.</motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="flex flex-col h-full">
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
              <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="flex flex-col h-full">
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
              <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="flex flex-col h-full">
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
        </motion.section>

        {/* Latest News & Updates Section */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-background"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-headline">Latest News & Updates</motion.h2>
              <motion.p variants={itemVariants} className="mt-2 text-lg text-muted-foreground">Stay informed about our journey and the future of green tech.</motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants}>
              <Card className="overflow-hidden group flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image src="/Energy Summit.jpg" data-ai-hint="conference presentation" alt="Tech Conference" fill className="object-cover" />
                  </div>
                  <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">Event</Badge>
                      <CardTitle>FGH at the Global Clean Energy Summit</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">We're excited to announce our participation in this year's summit, showcasing our latest innovations.</p>
                  </CardContent>
                  <CardFooter>
                      <Button variant="link" asChild className="p-0 h-auto">
                        <Link href="#">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                  </CardFooter>
              </Card>
              </motion.div>
               <motion.div variants={itemVariants}>
               <Card className="overflow-hidden group flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                   <div className="relative aspect-video">
                      <Image src="/Battery Storage Tech.webp" data-ai-hint="new technology" alt="New battery technology" fill className="object-cover" />
                  </div>
                  <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">Innovation</Badge>
                      <CardTitle>Breakthrough in Battery Storage Tech</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">Our R&D team has developed a new battery that increases efficiency by 20%.</p>
                  </CardContent>
                  <CardFooter>
                      <Button variant="link" asChild className="p-0 h-auto">
                        <Link href="#">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                  </CardFooter>
              </Card>
              </motion.div>
               <motion.div variants={itemVariants}>
               <Card className="overflow-hidden group flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                   <div className="relative aspect-video">
                      <Image src="/Community Solar Program.jpg" data-ai-hint="community" alt="Community solar project" fill className="object-cover" />
                  </div>
                  <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">Partnership</Badge>
                      <CardTitle>New Community Solar Program Launched</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">Partnering with local communities to provide accessible solar energy for all.</p>
                  </CardContent>
                  <CardFooter>
                      <Button variant="link" asChild className="p-0 h-auto">
                        <Link href="#">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                  </CardFooter>
              </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
