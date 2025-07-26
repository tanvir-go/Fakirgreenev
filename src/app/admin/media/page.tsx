import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Image from "next/image";

const mediaItems = [
    { src: "https://placehold.co/400x300.png", alt: "media-1", hint: "abstract" },
    { src: "https://placehold.co/400x300.png", alt: "media-2", hint: "nature" },
    { src: "https://placehold.co/400x300.png", alt: "media-3", hint: "city" },
    { src: "https://placehold.co/400x300.png", alt: "media-4", hint: "technology" },
    { src: "https://placehold.co/400x300.png", alt: "media-5", hint: "people" },
    { src: "https://placehold.co/400x300.png", alt: "media-6", hint: "business" },
];

export default function CmsMedia() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Media Library</CardTitle>
        <Button>
          <Upload className="mr-2" />
          Upload Media
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mediaItems.map((item) => (
                <div key={item.alt} className="aspect-square relative overflow-hidden rounded-md">
                    <Image src={item.src} alt={item.alt} data-ai-hint={item.hint} fill className="object-cover" />
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
