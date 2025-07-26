
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Eye, History, Handshake, BadgeCheck, Leaf, Lightbulb, Check, HardHat, Users, Focus, TrendingUp, Scale, Building, Camera, UserCheck, ChevronRight, FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; 
import Link from "next/link"; 
import { cn } from "@/lib/utils";
import PageHeader from "@/components/page-header";
import { ImageModal } from "@/components/ImageModal";

const historyEvents = [
  { year: "2016", title: "Green Energy Solution BD", description: "The journey began with a focus on providing accessible green energy solutions in Bangladesh." },
  { year: "2020", title: "Nationwide Expansion", description: "Expanded operations nationwide as Solar Technology BD, becoming a key player in the solar energy sector." },
  { year: "2025", title: "Fakir Green Energy and EV Ltd", description: "Officially registered as Fakir Green Energy and EV Ltd, broadening our scope to include electric mobility and advanced energy solutions." },
];

const affiliations = [
    "Bangladesh Sustainable & Renewable Energy Association (BSREA)",
    "Narayanganj Chamber of Commerce and Industry (NCCI)",
    "Partnerships with various local and international NGOs"
];

const coreValues = [
    { title: "Sustainability", description: "We promote clean energy to protect the environment and ensure a greener future.", icon: Leaf, color: "green" },
    { title: "Innovation", description: "We adopt modern technologies to deliver smarter and more efficient energy solutions.", icon: Lightbulb, color: "blue" },
    { title: "Quality First", description: "We ensure top-quality products and services in every project we undertake.", icon: Check, color: "blue" },
    { title: "Integrity", description: "We maintain honesty, transparency, and accountability in all business practices.", icon: Scale, color: "green" },
    { title: "Technical Excellence", description: "Our expert team delivers safe, accurate, and reliable technical solutions.", icon: HardHat, color: "green" },
    { title: "Customer Focus", description: "We prioritize customer needs with tailored energy and mobility solutions.", icon: UserCheck, color: "blue" },
    { title: "Teamwork", description: "We believe in collaboration and collective success across all departments.", icon: Users, color: "blue" },
    { title: "Impact-Driven Growth", description: "We aim for sustainable growth that benefits people, business, and the planet.", icon: TrendingUp, color: "green" },
];

const companyInfo = [
    { label: "Company Name", value: "Fakir Green Energy and EV Limited" },
    { label: "Type of Company", value: "Limited Company." },
    { label: "Incorporation No.", value: "C-202855/2025" },
    { label: "TIN No", value: "883805833885" },
    { label: "Nature of the Business", value: "The company specializes in Solar Renewable Energy and Electric Vehicle solutions." },
    { label: "Head Office and Factory", value: "The principal office and manufacturing facility are located in Fatulla, Narayanganj." },
    { label: "Product Portfolio", value: "The company offers a diverse range of products including: All types of Solar Installation, CNG Model Battery-Driven Auto, Solar Cooker, Various types of Electric Vehicles" },
    { label: "Demand and Safety Issue", value: "The enterprise supports the necessity of a pollution-free environment as a fundamental condition for human survival. All solutions are designed to be environmentally friendly." },
    { label: "Bank Name", value: "Pubali Bank Limited." },
    { label: "Member", value: "Narayanganj Chamber of Commerce and Industry (NCCI)<br />Bangladesh Sustainable & Renewable Energy Association (BSREA)" },
];

const legalDocuments = [
    { name: "Trade License", description: "Official license to operate business in Bangladesh.", image: "/Trade License.jpg" },
    { name: "Certificate of Incorporation", description: "Legal document of the company's formation.", image: "/Certificate of Incorporation.jpg" },
    { name: "TIN Certificate", description: "Taxpayer Identification Number certificate.", image: "/TIN Certificate.jpg" },
];

const galleryImages = [
  { src: "/gallery1.png", alt: "Gallery Image 1", hint: "solar panel installation" },
  { src: "/gallery2.png", alt: "Gallery Image 2", hint: "electric vehicle charging" },
  { src: "/Gallery3.jpg", alt: "Gallery Image 3", hint: "business meeting" },
  { src: "/gallery4.png", alt: "Gallery Image 4", hint: "engineer working" },
  { src: "/gallery5.png", alt: "Gallery Image 5", hint: "green energy conference" },
  { src: "/gallery6.png", alt: "Gallery Image 6", hint: "sustainable factory" },
  { src: "/gallery7.png", alt: "Gallery Image 7", hint: "rooftop solar panels" },
  { src: "/gallery8.png", alt: "Gallery Image 8", hint: "community solar project" },
  { src: "/gallery9.png", alt: "Gallery Image 9", hint: "modern electric car" },
];

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState({ src: "", title: "" });

  const handleOpenModal = (image: string, title: string) => {
    setSelectedImage({ src: image, title: title });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage({ src: "", title: "" });
  };

  return (
    <>
      <div className="flex flex-col">
         <PageHeader title="About Us" bgImage="/about_us.jpg" />

        <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
          
          <section className="max-w-5xl mx-auto text-muted-foreground text-lg space-y-6 text-justify">
            <p>
              Fakir Green Energy and EV Limited began its journey in 2016 as Green Energy Solution BD, with a mission to promote renewable energy in the Cox’s Bazar region. The company initially focused on humanitarian solar projects within the Rohingya refugee camps, working alongside international and local NGOs to provide sustainable energy to vulnerable communities.
            </p>
            <p>
              In 2022, the company expanded operations nationwide under its sister concern, Solar Technology BD, with its head office in Dhaka. Since then, it has successfully delivered solar solutions for residential, agricultural, and industrial sectors, including solar home systems, industrial setups, and solar irrigation systems—covering on-grid, off-grid, and hybrid models.
            </p>
            <p>
              In 2025, it was officially registered as Fakir Green Energy and EV Limited, marking a new phase of growth and innovation. The company diversified its offerings to include electric vehicles and lithium battery systems, reinforcing its commitment to clean energy and green mobility.
            </p>
            <p>
              With a strong team of skilled engineers and a reputation for quality, Fakir Green Energy and EV Limited continues to lead the way in sustainable technology, helping build a cleaner, greener future across Bangladesh.
            </p>
          </section>

          {/* Company History Section */}
          <section id="company-history">
              <h2 className="text-3xl font-bold font-headline mb-2 text-center flex items-center justify-center gap-4"><History className="h-8 w-8 text-gradient" /> Our History</h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">Tracing our roots and growth.</p>
              <div className="relative pl-6 border-l-2 border-primary max-w-3xl mx-auto">
                {historyEvents.map((event, index) => (
                  <div key={index} className="mb-10 ml-4">
                    <div className="absolute w-4 h-4 bg-primary rounded-full mt-1.5 -left-2.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{event.year}</time>
                    <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                    <p className="text-base font-normal text-muted-foreground">{event.description}</p>
                  </div>
                ))}
              </div>
          </section>

          {/* Mission & Vision Section */}
          <section id="mission-vision">
            <Card className="overflow-hidden">
              <CardContent className="p-0 md:grid md:grid-cols-2">
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <Target className="h-10 w-10 text-gradient" />
                    <h3 className="text-2xl font-semibold font-headline">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">Our mission is to accelerate the adoption of clean and sustainable energy by delivering innovative solar and electric solutions across Bangladesh. We aim to empower communities, support industries, and protect the environment by making renewable energy accessible, reliable, and affordable for all.</p>
                </div>
                <div className="p-8 space-y-4 bg-muted/50">
                  <div className="flex items-center gap-4">
                    <Eye className="h-10 w-10 text-gradient" />
                    <h3 className="text-2xl font-semibold font-headline">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground">Our vision is to become a national leader in renewable energy and electric mobility, driving a greener future for generations to come. Through quality service, advanced technology, and a commitment to sustainability, we strive to transform the energy landscape of Bangladesh and beyond.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* Our Commitment Section */}
          <section id="our-commitment">
            <Card className="overflow-hidden">
              <CardContent className="p-8 space-y-4 text-center">
                <div className="flex items-center justify-center gap-4">
                  <Handshake className="h-10 w-10 text-gradient" />
                  <h3 className="text-2xl font-semibold font-headline">Our Commitment</h3>
                </div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                At Fakir Green Energy and EV Limited, we are committed to building a cleaner and more sustainable future. We ensure the highest standards  in  every  solution  we offer—whether it’s solar power, electric vehicles, or energy storage systems. Our promise is to deliver quality, reliability, and innovation in everything we do.
                <br></br>
                We work with trusted technology, certified components, and an expert team of engineers and technicians to make sure every project meets your expectations. From planning to execution, we prioritize safety, efficiency, and long-term value. We are not just delivering energy solutions—we are powering progress for people, communities, and the planet.

                </p>
              </CardContent>
            </Card>
          </section>

          {/* Core Values Section */}
          <section id="core-values" className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-12">Our Core Values</h2>
            <div className="relative max-w-5xl mx-auto px-4">
              {/* The timeline bar - hidden on small screens */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2 hidden md:block" />

              <div className="md:hidden space-y-8">
                  {coreValues.map((value, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-xl p-4 flex flex-col items-center">
                           <div className={`flex items-center justify-center w-20 h-20 mb-4 rounded-full text-white ${value.color === 'green' ? 'bg-green-600' : 'bg-blue-900'}`}>
                             <value.icon className="w-10 h-10" />
                           </div>
                           <h3 className={`text-xl font-bold ${value.color === 'green' ? 'text-gradient' : 'text-blue-900'}`}>{value.title}</h3>
                           <p className="text-muted-foreground text-sm mt-2">{value.description}</p>
                      </div>
                  ))}
              </div>

              <div className="hidden md:block">
                {coreValues.map((value, index) => (
                  <div key={index} className="relative mb-16 w-full">
                    <div className={`flex items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Card container */}
                      <div className="w-full md:w-5/12">
                        <div className="relative flex items-center bg-white rounded-lg shadow-xl p-4">
                          {/* Icon container */}
                          <div className={`hidden sm:flex items-center justify-center w-24 h-24 rounded-full text-white flex-shrink-0
                            ${index % 2 === 0 ? '-ml-12 order-first' : '-mr-12 order-last'}
                            ${value.color === 'green' ? 'bg-green-600' : 'bg-blue-900'}`}>
                            <value.icon className="w-12 h-12" />
                          </div>
                          {/* Text content */}
                          <div className={`flex-grow text-left sm:text-center ${index % 2 === 0 ? 'sm:text-left sm:pl-4' : 'sm:text-right sm:pr-4'}`}>
                            <h3 className={`text-xl font-bold ${value.color === 'green' ? 'text-gradient' : 'text-blue-900'}`}>{value.title}</h3>
                            <p className="text-muted-foreground text-sm">{value.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Spacer for the other side on desktop */}
                      <div className="hidden md:block w-5/12"></div>
                    </div>

                    {/* Dot on timeline - centered for all screen sizes */}
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {String.fromCharCode(65 + index)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Company Information Section */}
          <section id="company-information">
              <Card>
                  <CardHeader className="text-center">
                      <CardTitle className="text-3xl font-bold font-headline flex items-center justify-center gap-4">
                          <Building className="h-8 w-8 text-gradient" /> Company Information
                      </CardTitle>
                      <CardDescription className="text-lg">Key details about our company.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div className="border rounded-lg overflow-hidden">
                          <table className="w-full">
                              <tbody className="divide-y">
                                  {companyInfo.map((info, index) => (
                                      <tr key={index} className="divide-x">
                                          <td className="font-semibold p-4 w-1/3 bg-muted/50">{info.label}</td>
                                          <td className="p-4 w-2/3 text-muted-foreground" dangerouslySetInnerHTML={{ __html: info.value }}></td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  </CardContent>
              </Card>
          </section>

          {/* Company Profile Section */}
          <section id="company-profile">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline flex items-center justify-center gap-4">
                  <FileText className="h-8 w-8 text-gradient" /> Company Profile
                </CardTitle>
                <CardDescription className="text-lg">Download our detailed company profile.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button asChild className="bg-gradient-primary hover:opacity-90">
                  <a href="/Profile v1.pdf" target="_blank" rel="noopener noreferrer">
                    View Company Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Legal Documents Section */}
          <section id="legal-documents">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline flex items-center justify-center gap-4">
                  <FileText className="h-8 w-8 text-gradient" /> Legal Documents
                </CardTitle>
                <CardDescription className="text-lg">Our official legal and compliance documents.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {legalDocuments.map((doc, index) => (
                    <Card key={index} className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                      <FileText className="h-12 w-12 text-gradient mb-4" />
                      <h4 className="text-lg font-semibold">{doc.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1 mb-4 flex-grow">{doc.description}</p>
                      <Button 
                        variant="outline"
                        onClick={() => handleOpenModal(doc.image, doc.name)}
                        className="hover:bg-gradient-primary hover:text-primary-foreground"
                       >
                          View Document
                       </Button>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Media and Gallery Section */}
          <section id="media-gallery">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline flex items-center justify-center gap-4">
                  <Camera className="h-8 w-8 text-gradient" /> Media and Gallery
                </CardTitle>
                <CardDescription className="text-lg">A glimpse into our work and projects.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square relative overflow-hidden rounded-lg group">
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        data-ai-hint={image.hint} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">{image.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Certifications & Affiliations Section */}
          <section id="certifications">
              <Card className="bg-muted/50">
                  <CardHeader className="text-center">
                     <CardTitle className="text-3xl font-bold font-headline flex items-center justify-center gap-4"><BadgeCheck className="h-8 w-8 text-gradient" /> Certifications & Affiliations</CardTitle>
                     <CardDescription className="text-lg">Our commitment to quality and industry standards.</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                      <ul className="space-y-4 max-w-2xl mx-auto">
                         {affiliations.map((item, index) => (
                             <li key={index} className="flex items-center justify-center gap-3 text-muted-foreground">
                                 <Handshake className="h-5 w-5 text-gradient"/>
                                 <span>{item}</span>
                             </li>
                         ))}
                      </ul>
                  </CardContent>
              </Card>
          </section>

        </div>
      </div>
      <ImageModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImage.src}
        title={selectedImage.title}
      />
    </>
  );
}

    

    