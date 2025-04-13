"use client";

import type * as React from "react";
import {
  ArrowUpCircleIcon,
  BarChart3,
  BarChartIcon,
  Briefcase,
  Building,
  Calendar,
  CameraIcon,
  ClipboardListIcon,
  Coffee,
  CreditCard,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileText,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  Home,
  LayoutDashboard,
  LayoutDashboardIcon,
  ListIcon,
  Package,
  Receipt,
  SearchIcon,
  SettingsIcon,
  Users,
  UsersIcon,
  Wifi,
} from "lucide-react";

import { NavDocuments } from "./nav-documents";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Harshit",
    email: "harshit@exaflair.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Subscriptions",
      url: "/subscriptions",
      icon: CreditCard,
    },
    {
      title: "Expenses",
      url: "/expenses",
      icon: BarChart3,
    },
    {
      title: "Invoices",
      url: "/invoices",
      icon: FileText,
    },
    {
      title: "Funding",
      url: "/funding",
      icon: Briefcase,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Pantry",
      url: "/expenses/pantry",
      icon: Coffee,
    },
    {
      name: "WiFi",
      url: "/expenses/wifi",
      icon: Wifi,
    },
    {
      name: "Business Contacts",
      url: "/expenses/business-contacts",
      icon: Users,
    },
    {
      name: "Auditor/CA",
      url: "/expenses/auditor",
      icon: Receipt,
    },
    {
      name: "Project Tools",
      url: "/expenses/project-tools",
      icon: Package,
    },
    {
      name: "Office Setup",
      url: "/expenses/office-setup",
      icon: Home,
    },
    {
      name: "Incorporation",
      url: "/expenses/incorporation",
      icon: Building,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <img src="/transparent-logo-white.png" className="h-5 w-5" />
                <span className="text-base font-semibold">
                  Exfalir Finances
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
