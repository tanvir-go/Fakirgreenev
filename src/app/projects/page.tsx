import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageHeader from "@/components/page-header";

const completedProjects = [
  { sn: 1, name: "Solar Water Pump", org: "Pulse Bangladesh", location: "BGB Camp" },
  { sn: 2, name: "7 Set System Installation", org: "Concern Worldwide", location: "Rohinga Camp" },
  { sn: 3, name: "4 Set System Installation", org: "Relief International", location: "Rohinga Camp" },
  { sn: 4, name: "Assessment of solar system", org: "World Vision", location: "Rohinga Camp" },
  { sn: 5, name: "Installation of Solar Street Light", org: "CCDB", location: "Rohinga Camp" },
  { sn: 6, name: "50 Set Solar System Installation", org: "BRAC", location: "Kutubdiapara, Nazirtek" },
  { sn: 7, name: "10 Set Solar Home System", org: "Pulse Bangladesh", location: "BGB Camp" },
  { sn: 8, name: "13 Nos. Solar Inverter System", org: "Pulse Bangladesh", location: "BGB Camp" },
  { sn: 9, name: "Solar Street Light Installation", org: "ICCO Cooperation", location: "Rohinga Camp" },
  { sn: 10, name: "Solar Deep Tube well", org: "JMKM", location: "Rohinga Camp" },
  { sn: 11, name: "Solar Home System Installation", org: "YPSA", location: "Rohinga Camp" },
  { sn: 12, name: "Solar System", org: "RIC", location: "Kotbazar, Ukhia" },
  { sn: 13, name: "100 set Solar Street Light", org: "WHH", location: "Rohinga Camp" },
  { sn: 14, name: "23 set Solar Street Light", org: "EkotaMohilaShamity", location: "Rohinga Camp" },
  { sn: 15, name: "Solar Home System Installation", org: "Coast", location: "Rohinga Camp" },
  { sn: 16, name: "Solar Home System Installation", org: "MBSS", location: "Rohinga Camp" },
  { sn: 17, name: "13 set Solar Home System Installation", org: "Help Age", location: "Rohinga Camp" },
  { sn: 18, name: "10 set Solar Deep Tube well", org: "DPHE", location: "Rohinga Camp" },
  { sn: 19, name: "74 set Solar Street Light", org: "CCDB", location: "Rohinga Camp" },
  { sn: 20, name: "Solar Street Light Repair", org: "OXFAM", location: "Rohinga Camp" },
];

const stbdProjects = [
  { sn: 1, name: "1.5KW Solar Home System", org: "Mr. Tanvir Ahmed", location: "Kapasia, Gazipur" },
  { sn: 2, name: "1KW Solar Home System", org: "Mr. Nasir Uddin", location: "Uttara, Dhaka" },
  { sn: 3, name: "1.5KW Solar Home System", org: "Mr. Mintu Ahmed", location: "Dagonbhuiya, Feni" },
  { sn: 4, name: "Solar Home System", org: "Mr. Mamun", location: "Sharishabari, Jamalpur" },
  { sn: 5, name: "Solar Home System", org: "Mr. Manik", location: "Sharishabari, Jamalpur" },
  { sn: 6, name: "1KW Solar Home System", org: "Mr. Nayeem Ahmed", location: "Senbag, Noakhali" },
  { sn: 7, name: "Solar Home System", org: "Mr. Anwar Hossain", location: "Uttara, Dhaka" },
  { sn: 8, name: "1.5KW Solar Home System", org: "Mr. Babul Ahmed", location: "Dagonbhuiya, Feni" },
  { sn: 9, name: "100KW Solar Installation Service", org: "Mr. Helal", location: "Keranigonj, Dhaka" },
  { sn: 10, name: "Solar Home System", org: "Mr. Nayeem Ahmed", location: "Uttara, Dhaka" },
  { sn: 11, name: "Solar Home System", org: "Mr. Abdul Jalil", location: "Sirajgonj" },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader title="Completed Project List" />
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-16">
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline text-primary">Projects successfully completed by GESBD</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto text-justify">
              Since its inception, Green Energy Solution BD (GESBD) has successfully implemented a wide range of renewable energy projects across Bangladesh. Notably, the company completed several impactful solar installations within the Rohingya refugee camps in Cox's Bazar in collaboration with international and local NGOs. These humanitarian projects provided clean and reliable energy to some of the most underserved communities. Over the years, GESBD has also completed numerous solar home systems, industrial solar power setups, and solar irrigation solutions in multiple districts. Each project reflects our commitment to quality, technical excellence, and sustainable development.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px] text-center">SN</TableHead>
                      <TableHead>Name of the Project</TableHead>
                      <TableHead>Name of the Responsible Org.</TableHead>
                      <TableHead>Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {completedProjects.map((project) => (
                      <TableRow key={project.sn}>
                        <TableCell className="font-medium text-center">{project.sn}</TableCell>
                        <TableCell>{project.name}</TableCell>
                        <TableCell>{project.org}</TableCell>
                        <TableCell>{project.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline text-primary">Projects successfully completed by STBD</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto text-justify">
              Solar Technology BD (STBD) has successfully completed numerous solar energy projects across Bangladesh since its operational expansion in 2022. Noteworthy achievements include solar-powered home systems, street lighting, and irrigation projects in rural and underserved areas. STBD has worked with various NGOs, private clients, and institutions to deliver customized solar solutions that ensure reliable and cost-effective power. The company's expertise also extends to industrial on-grid and hybrid systems, contributing to energy efficiency in factories and commercial buildings. Each completed project stands as a testament to STBD's commitment to clean energy, quality execution, and long-term sustainability.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px] text-center">SN</TableHead>
                      <TableHead>Name of the Project</TableHead>
                      <TableHead>Name of the Responsible Org.</TableHead>
                      <TableHead>Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stbdProjects.map((project) => (
                      <TableRow key={project.sn}>
                        <TableCell className="font-medium text-center">{project.sn}</TableCell>
                        <TableCell>{project.name}</TableCell>
                        <TableCell>{project.org}</TableCell>
                        <TableCell>{project.location}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
