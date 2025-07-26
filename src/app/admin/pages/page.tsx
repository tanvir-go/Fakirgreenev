import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pages = [
  { title: "Home", status: "Published", lastUpdated: "2024-07-28" },
  { title: "About Us", status: "Published", lastUpdated: "2024-07-27" },
  { title: "Services", status: "Draft", lastUpdated: "2024-07-29" },
  { title: "Hajj & Omrah", status: "Published", lastUpdated: "2024-07-25" },
  { title: "Contact", status: "Published", lastUpdated: "2024-07-20" },
];

export default function CmsPages() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Manage Pages</CardTitle>
        <Button>
          <PlusCircle className="mr-2" />
          Add New Page
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.title}>
                <TableCell className="font-medium">{page.title}</TableCell>
                <TableCell>
                  <Badge variant={page.status === 'Published' ? 'default' : 'secondary'}>
                    {page.status}
                  </Badge>
                </TableCell>
                <TableCell>{page.lastUpdated}</TableCell>
                <TableCell className="text-right">
                   <Button variant="ghost" size="icon">
                     <MoreHorizontal />
                   </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
