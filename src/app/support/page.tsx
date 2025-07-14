"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Headset, BookOpen, Bot } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(20, { message: "Message must be at least 20 characters." }),
});

const faqs = [
    { q: "How do I get a quote for a solar installation?", a: "You can request a quote by filling out the contact form on this page with details about your property and energy needs. Our team will get back to you within 24 hours." },
    { q: "What is the warranty on your products?", a: "Our solar panels come with a 25-year performance warranty, and inverters have a 10-year warranty. All installations are covered by a 5-year workmanship warranty." },
    { q: "Do you offer financing options?", a: "Yes, we partner with financial institutions to offer flexible financing and loan options for your green energy projects. Contact us to learn more." },
    { q: "How does the EV charging station installation work?", a: "Our process includes a site assessment, system design, permit handling, professional installation, and final inspection to ensure your charging station is ready to use." }
]

export default function SupportPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Customer Support</h1>
        <p className="mt-4 text-lg text-muted-foreground">We're here to help. Find answers or get in touch with our team.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3"><Headset className="h-8 w-8 text-primary"/> Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl><Input placeholder="john.doe@example.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl><Input placeholder="Regarding solar panels..." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl><Textarea placeholder="Please describe your inquiry in detail." className="min-h-[150px]" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full md:w-auto">Submit Inquiry</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ and Resources */}
        <div className="space-y-8">
           <Card>
            <CardHeader>
                <CardTitle>Quick Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <Button variant="outline" className="w-full justify-start gap-3"><BookOpen className="text-primary"/> Documentation Hub</Button>
                 <Button variant="outline" className="w-full justify-start gap-3"><Bot className="text-primary"/> Chat with our AI Assistant</Button>
            </CardContent>
           </Card>
           
          <div>
            <h3 className="text-2xl font-bold mb-4">FAQs</h3>
            <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                     <AccordionItem key={index} value={`item-${index+1}`}>
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                        {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
