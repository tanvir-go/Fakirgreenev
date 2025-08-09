

"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Users, HardHat, MapPin } from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import { motion } from "framer-motion";
import React from "react";

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

const boardMembers = [
  { name: "LAZINA IBNAT ZAMAN", title: "Chairman", description: "Provides visionary leadership and strategic direction, ensuring the company remains focused on sustainability and innovation.", image: "/Chairman_.png", hint: "portrait woman" },
  { name: "FARID AMIN", title: "Managing Director", description: "Oversees overall operations, business development, and execution of clean energy and EV projects with a focus on quality and long-term impact.", image: "/Managing_Director.png", hint: "portrait man" },
  { name: "FAKIR SHAMSUZZAMAN", title: "Director", description: "Contributes to strategic planning and corporate governance, supporting the company’s mission for clean and reliable energy solutions.", image: "/Director1.png", hint: "portrait man" },
  { name: "SHAIKH SANJIDA NASRIN", title: "Director", description: "Plays an active role in organizational development and decision-making, promoting innovation and operational efficiency.", image: "/Director2.png", hint: "portrait woman" },
];

const boardAdvisers = [
    { name: "DR. A. N. M MOMINUL ISLAM MUKUT", title: "Adviser", description: "Renowned professor and renewable energy expert guiding R&D, innovation, and academic collaboration.", image: "/Adviser1.png", hint: "portrait man" },
    { name: "ENGR. KAMRUZZAMAN", title: "Adviser", description: "Brings technical depth and oversight to project implementation and system reliability.", image: "/Adviser2.png", hint: "portrait woman" },
  ];

const technicalTeam = [
  { name: "MD. JIBON", title: "Technician" },
  { name: "ENGR. SAGOR", title: "Assistant Engineer" },
  { name: "ENGR. OMOR FARUK", title: "Assistant Engineer" },
  { name: "ENGR. SHORIFUL ISLAM", title: "Project Engineer" },
  { name: "MD. SOHEL RANA", title: "General Manager" },
  { name: "MD. AL AMIN", title: "Technician" },
  { name: "MD. HANIF MIA", title: "Technician" },
  { name: "MD. SABUJ", title: "Technician" },
];

const marketingExecutives = [
  { name: "KAWSER AHMED SUMON", title: "Marketing Executive", location: "Netrokona Sadar, Netrokona", image: "/KAWSER AHMED SUMON.png", hint: "portrait man" },
  { name: "RUMON MIA", title: "Marketing Executive", location: "Old Bus Stand mor, Sunamganj", image: "/RUMON MIA.png", hint: "portrait man" },
  { name: "REJAUL KARIM", title: "Marketing Executive", location: "Habigonj", image: "/REJAUL KARIM.png", hint: "portrait man" },
  { name: "SHOPAN AHMED", title: "Marketing Executive", location: "Mymensingh", image: "/SHOPAN AHMED.png", hint: "portrait man" },
  { name: "CHANDAN KUMAR DAS", title: "Marketing Executive", location: "Dinajpur Sadar", image: "/CHANDAN KUMAR DAS.png", hint: "portrait man" },
  { name: "ASADUL HOSSAIN MAHBUB", title: "Marketing Executive", location: "Sylhet Sadar", image: "/ASADUL HOSSAIN MAHBUB.png", hint: "portrait man" }
];

export default function OurTeamPage() {
  return (
    <div className="flex flex-col">
      <PageHeader title="Our Team" bgImage="/ourteam.jpg" />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="mt-4 text-lg text-muted-foreground">Meet the dedicated individuals driving our mission forward.</p>
        </div>

        <div className="space-y-20">
          {/* Chairman's Message Section */}
          <motion.section 
            id="chairman-message"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-shrink-0 md:w-1/3 text-center">
                   <Image src="/Chairman_.png" data-ai-hint="portrait ceo woman" alt="Chairman" width={250} height={250} className="rounded-full mx-auto shadow-lg"/>
                </div>
                <div className="space-y-4 flex-1">
                  <MessageCircle className="h-10 w-10 text-gradient" />
                  <h3 className="text-2xl font-semibold font-headline">Message from the Chairman</h3>
                  <blockquote className="text-muted-foreground italic border-l-4 pl-4">"Dear Stakeholders, Partners, and Friends, It is with great pride and optimism that I welcome you to Fakir Green Energy and EV Ltd., a company committed to creating a cleaner, greener, and more sustainable future for Bangladesh and beyond. As the world faces urgent challenges like climate change and energy security, renewable energy stands out as a vital solution. Our dedication to harnessing solar power, wind energy, and electric mobility goes beyond business—it is our responsibility to the planet and future generations. We have launched bold initiatives in solar energy, electric vehicle development, and energy-efficient technologies. Through innovation, strategic partnerships, and a passionate team, we deliver solutions that. At Fakir Green Energy and EV Ltd., sustainability is not just an option—it is the way forward. Our vision is to make renewable energy accessible and affordable for all, while leading the shift to eco-friendly transportation through locally assembled electric vehicles. As we move forward, I invite you to join us on this journey to power a brighter tomorrow. Together, we can build a future that is technologically advanced and environmentally responsible. Thank you for your continued support and trust."</blockquote>
                  <p className="font-semibold pt-4">Lazina Ibnat Zaman, <span className="text-muted-foreground font-normal">Chairman</span></p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Managing Director's Message Section */}
          <motion.section 
            id="md-message"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 md:w-1/3 text-center">
                   <Image src="/Managing_Director.png" data-ai-hint="portrait executive man" alt="Managing Director" width={250} height={250} className="rounded-full mx-auto shadow-lg"/>
                </div>
                <div className="space-y-4 flex-1">
                  <MessageCircle className="h-10 w-10 text-gradient" />
                  <h3 className="text-2xl font-semibold font-headline">Message from the Managing Director</h3>
                  <blockquote className="text-muted-foreground italic border-l-4 pl-4">"Dear Friends and Partners, At Fakir Green Energy and EV Ltd., we are committed to driving meaningful change through renewable energy. As Managing Director, I take pride in our efforts to deliver clean, sustainable solutions that benefit both our environment and the communities we serve. Our work focuses on advancing solar power, electric vehicles, and energy-efficient technologies. We believe innovation and responsibility go hand in hand. By offering practical and affordable alternatives to traditional energy, we help reduce carbon emissions and promote a healthier planet. Strong teamwork and strategic partnerships enable us to transform ambitious goals into tangible results. Looking ahead, we aim to broaden access to green technologies and foster a culture of sustainability across Bangladesh. We are dedicated to leading the shift toward eco-friendly transportation and energy systems that support economic growth while safeguarding our natural resources. Thank you for your continued trust and support. Together, we can build a cleaner, greener, and more resilient future for all."</blockquote>
                  <p className="font-semibold pt-4">Farid Amin, <span className="text-muted-foreground font-normal">Managing Director</span></p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Board of Directors Section */}
          <motion.section 
            id="board-of-directors" 
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
               <h2 className="text-3xl font-bold font-headline mb-2 flex items-center justify-center gap-4"><Users className="h-8 w-8 text-gradient" /> Our Board of Directors</h2>
               <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">Our Board of Directors brings industry expertise and vision, guiding Fakir Green Energy and EV Limited in delivering sustainable energy and electric mobility solutions across Bangladesh.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {boardMembers.map((member) => (
                  <motion.div key={member.name} variants={itemVariants}>
                    <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                        <Avatar className="h-32 w-32 mx-auto mb-4 shadow-lg border-4 border-background hover:border-primary transition-colors">
                          <AvatarImage src={member.image} data-ai-hint={member.hint} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <CardHeader className="p-0">
                          <CardTitle className="text-xl">{member.name}</CardTitle>
                          <p className="text-sm text-gradient font-semibold mb-2">{member.title}</p>
                        </CardHeader>
                        <CardContent className="p-0 pt-4 flex-grow">
                          <CardDescription className="text-sm">{member.description}</CardDescription>
                        </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
          </motion.section>

          {/* BOARD OF ADVISERS Section */}
          <motion.section 
            id="board-of-advisers" 
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
               <h2 className="text-3xl font-bold font-headline mb-2 flex items-center justify-center gap-4"><Users className="h-8 w-8 text-gradient" /> Our Board of Advisers</h2>
               <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">Our Board of Advisers provides strategic guidance and industry expertise, helping us to navigate the evolving landscape of renewable energy and sustainable technology.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
                {boardAdvisers.map((member) => (
                  <motion.div key={member.name} variants={itemVariants}>
                    <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                        <Avatar className="h-32 w-32 mx-auto mb-4 shadow-lg border-4 border-background hover:border-primary transition-colors">
                          <AvatarImage src={member.image} data-ai-hint={member.hint} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <CardHeader className="p-0">
                          <CardTitle className="text-xl">{member.name}</CardTitle>
                          <p className="text-sm text-gradient font-semibold mb-2">{member.title}</p>
                        </CardHeader>
                        <CardContent className="p-0 pt-4 flex-grow">
                          <CardDescription className="text-sm">{member.description}</CardDescription>
                        </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
          </motion.section>

          {/* Staff & Technical Team Section */}
          <motion.section 
            id="technical-team" 
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
               <h2 className="text-3xl font-bold font-headline mb-2 flex items-center justify-center gap-4"><HardHat className="h-8 w-8 text-gradient" /> Staff & Technical Team</h2>
               <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">Our skilled technicians and engineers are the backbone of our operations, ensuring every project is executed to the highest standard.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {technicalTeam.map((member, index) => (
                  <motion.div key={`${member.name}-${index}`} variants={itemVariants}>
                    <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center h-full justify-center">
                        <CardHeader className="p-0">
                          <CardTitle className="text-xl">{member.name}</CardTitle>
                          <CardDescription className="text-gradient font-semibold">{member.title}</CardDescription>
                        </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
          </motion.section>

          {/* District Office and Marketing Executive Section */}
          <motion.section 
            id="marketing-executive-team" 
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
           >
               <h2 className="text-3xl font-bold font-headline mb-2 flex items-center justify-center gap-4"><MapPin className="h-8 w-8 text-gradient" /> District Office and Marketing Executive</h2>
               <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">Our dedicated marketing executives are located across districts to serve you better.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {marketingExecutives.map((member, index) => (
                  <motion.div key={`${member.name}-${index}`} variants={itemVariants}>
                    <Card className="text-center p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center h-full">
                        <Avatar className="h-32 w-32 mx-auto mb-4 shadow-lg border-4 border-background hover:border-primary transition-colors">
                          <AvatarImage src={member.image} data-ai-hint={member.hint} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <CardHeader className="p-0">
                          <CardTitle className="text-xl">{member.name}</CardTitle>
                          <CardDescription className="text-gradient font-semibold">{member.title}</CardDescription>
                          <CardDescription className="text-sm text-muted-foreground mt-1">{member.location}</CardDescription>
                        </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
