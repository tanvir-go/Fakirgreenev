
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactUsModal } from "@/components/ContactUsModal";
import { FaWhatsapp } from "react-icons/fa";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Solar Home Systems",
    description: "Affordable and clean solar power solutions for homes, ensuring uninterrupted electricity in both urban and remote areas.",
    image: "/Picture1.png",
    hint: "solar panels home"
  },
  {
    title: "Solar Industrial Solutions",
    description: "Customized solar energy systems for commercial and industrial use, designed for maximum efficiency and reduced operational costs.",
    image: "/Picture2.png",
    hint: "industrial solar"
  },
  {
    title: " Solar Irrigation Systems",
    description: "Solar-powered water pumps that support sustainable agriculture and reduce farmers’ dependence on diesel or grid electricity.",
    image: "/Picture3.png",
    hint: "solar irrigation"
  },
  {
    title: " Solar Street Lights",
    description: "Stand-alone, energy-e cient lighting systems ideal for roads, pathways, and public areas, powered entirely by the sun.",
    image: "/Picture4.png",
    hint: "solar street light"
  },
  {
    title: "Solar IPS Systems",
    description: "Integrated power backup systems combining solar panels, batteries, and inverters to ensure reliable electricity during outages.",
    image: "/Picture5.png",
    hint: "solar battery"
  },
  {
    title: " On-Grid, Off-Grid & Hybrid Systems",
    description: "Flexible solar setups tailored for residential or commercial use, offering full energy independence or grid connectivity.",
    image: "/Picture6.png",
    hint: "hybrid energy"
  },
  {
    title: "Lithium Battery Assembly Plant",
    description: "Local production of high-performance lithium batteries, ensuring quality storage solutions for solar systems and electric vehicles.",
    image: "/Picture7.png",
    hint: "battery factory"
  },
  {
    title: "Electric Vehicles (EV)",
    description: "Eco-friendly three-wheelers, four-wheelers, and scooters designed to promote green, low-cost, and sustainable transportation.",
    image: "/Picture88.png",
    hint: "electric scooter"
  },
];

const newServices = [
  {
    title: "Solar Energy Solutions",
    description: "We provide end-to-end solar installation services for on-grid, off-grid, and hybrid systems. Our solar setups are custom-designed to ensure optimal energy output and cost savings for residential, commercial, and industrial applications across Bangladesh.",
    image: "/Solar Energy Solutions.jpg",
    hint: "solar installation service"
  },
  {
    title: "Battery Solutions",
    description: "We supply and assemble high-performance lithium-ion and lead-acid batteries to support solar systems and backup power needs. Our battery solutions ensure reliable energy storage with long life cycles and superior discharge performance.",
    image: "/Battery Solutions.jpg",
    hint: "lithium batteries"
  },
  {
    title: "Electric Vehicle (EV) Support",
    description: "We deliver clean mobility solutions through electric three-wheelers, four-wheelers, and scooters. Our services include EV supply, maintenance, and CNG-to-EV conversions, supporting Bangladesh’s transition to an eco-friendly transportation system.",
    image: "/Electric Vehicle.jpg",
    hint: "electric vehicle maintenance"
  },
  {
    title: "Solar Irrigation Systems",
    description: "Our solar-powered irrigation systems provide farmers with sustainable, low-cost alternatives to diesel pumps. These systems improve agricultural productivity while reducing operational expenses and environmental impact in rural farming communities.",
    image: "/Solar Irrigation Systems.jpg",
    hint: "solar water pump"
  },
  {
    title: "Solar Street Lighting",
    description: "We install durable, energy-efficient solar street lights ideal for rural roads, pathways, and public areas. These systems offer consistent nighttime illumination with zero electricity cost, reducing dependence on the grid.",
    image: "/Solar Street Lighting.jpg",
    hint: "solar street lights"
  },
  {
    title: "System Design & Engineering",
    description: "Our engineering team offers load analysis, system design, and technical documentation to ensure solar and EV systems are tailored for maximum efficiency, performance, and safety on every project.",
    image: "/System Design .jpg",
    hint: "engineering blueprint"
  },
  {
    title: "Maintenance & After-Sales Support",
    description: "We provide professional maintenance, repairs, and technical support for all installed systems. Our ongoing service ensures optimal system performance and long-term reliability for our clients across Bangladesh.",
    image: "/Maintenance.jpg",
    hint: "technician support"
  }
];


const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleContactClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(undefined);
  };

  const handleWhatsAppClick = (serviceTitle: string) => {
    const message = encodeURIComponent(`I'm interested in your service: ${serviceTitle}. Please tell me more.`);
    const whatsappNumber = "+8801763996144"; // Replace with your actual WhatsApp number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Solutions We Offer</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">At Fakir Green Energy & EV Limited, we are committed to providing smart, sustainable, and cost-effective energy solutions. Our services are tailored to meet the needs of households, industries, and agricultural sectors across Bangladesh.</p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
          >
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative aspect-video">
                <Image
                  src={service.image}
                  data-ai-hint={service.hint}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-2 w-full">
                <Button
                  onClick={() => handleContactClick(service.title)}
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full"
                >
                  <FaWhatsapp className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h2>
        </div>
        <div className="space-y-16">
          {newServices.map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className={`relative aspect-video rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={service.image} data-ai-hint={service.hint} alt={service.title} fill className="object-cover" />
              </motion.div>
              <motion.div
                className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold font-headline flex items-center gap-2"> <CheckCircle className="w-8 h-8 text-gradient" /> {service.title}</h3>
                <p className="text-lg text-muted-foreground">{service.description}</p>
                <div className="flex items-center space-x-2 pt-4">
                  <Button
                    onClick={() => handleContactClick(service.title)}
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    Request a Quote
                  </Button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <ContactUsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceTitle={selectedService}
      />
    </div>
  );
}
