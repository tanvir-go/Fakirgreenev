"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search } from "lucide-react";
import Image from 'next/image';

const allDestinations = [
  { name: 'Mecca, Saudi Arabia', tags: ['hajj', 'omrah', 'religious'], image: 'https://placehold.co/600x400.png', hint: 'mecca kaaba' },
  { name: 'Medina, Saudi Arabia', tags: ['hajj', 'omrah', 'religious'], image: 'https://placehold.co/600x400.png', hint: 'medina mosque' },
  { name: 'Jerusalem, Palestine', tags: ['religious', 'historical'], image: 'https://placehold.co/600x400.png', hint: 'jerusalem al-aqsa' },
  { name: 'Istanbul, Turkey', tags: ['historical', 'cultural'], image: 'https://placehold.co/600x400.png', hint: 'istanbul skyline' },
  { name: 'Cairo, Egypt', tags: ['historical', 'ancient'], image: 'https://placehold.co/600x400.png', hint: 'cairo pyramids' },
  { name: 'Marrakech, Morocco', tags: ['cultural', 'vibrant'], image: 'https://placehold.co/600x400.png', hint: 'marrakech market' },
  { name: 'Dubai, UAE', tags: ['modern', 'luxury'], image: 'https://placehold.co/600x400.png', hint: 'dubai city' },
  { name: 'Amman, Jordan', tags: ['historical', 'roman'], image: 'https://placehold.co/600x400.png', hint: 'amman city' },
];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinations = useMemo(() => {
    if (!searchTerm) return allDestinations;
    return allDestinations.filter(dest =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Explore Our Top Destinations</h1>
        <p className="mt-4 text-lg text-muted-foreground">Discover places of wonder and spiritual significance.</p>
      </div>

      <div className="mb-12 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search destinations (e.g., Mecca, historical)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-base"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Interactive Map</h2>
        <Card className="overflow-hidden">
          <div className="aspect-video w-full bg-muted flex items-center justify-center">
            <Image src="https://placehold.co/1200x600.png" data-ai-hint="world map" alt="Map of destinations" width={1200} height={600} className="w-full h-full object-cover"/>
            {/* Interactive map component would go here */}
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8">Destinations</h2>
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((dest) => (
              <Card key={dest.name} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/2]">
                    <Image src={dest.image} data-ai-hint={dest.hint} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex-col items-start">
                  <h3 className="font-semibold flex items-center gap-2"><MapPin className="h-4 w-4 text-gradient" /> {dest.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {dest.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No destinations found for your search.</p>
        )}
      </div>
    </div>
  );
}
