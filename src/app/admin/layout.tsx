'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { LayoutDashboard, FileText, Newspaper, Image as ImageIcon } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const navLinks = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/pages', label: 'Pages', icon: FileText },
    { href: '/admin/posts', label: 'Posts', icon: Newspaper },
    { href: '/admin/media', label: 'Media', icon: ImageIcon },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <Logo className="text-sidebar-foreground" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href))}
                    tooltip={{ children: link.label }}
                  >
                    <Link href={link.href}>
                      <link.icon />
                      <span>{link.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="flex items-center justify-between p-4 border-b">
             <SidebarTrigger />
             <h1 className="text-xl font-semibold">Admin Panel</h1>
          </header>
          <main className="p-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
