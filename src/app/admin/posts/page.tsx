import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const posts = [
  { title: "The Future of Wind Energy", status: "Published", lastUpdated: "2024-07-28" },
  { title: "Guide to EV Charging", status: "Published", lastUpdated: "2024-07-27" },
  { title: "Solar Panel Maintenance Tips", status: "Draft", lastUpdated: "2024-07-29" },
];

export default function CmsPosts() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Manage Posts</CardTitle>
        <Button>
          <PlusCircle className="mr-2" />
          Add New Post
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
            {posts.map((post) => (
              <TableRow key={post.title}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>
                  <Badge variant={post.status === 'Published' ? 'default' : 'secondary'}>
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell>{post.lastUpdated}</TableCell>
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
