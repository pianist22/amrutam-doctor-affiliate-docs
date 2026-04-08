import {
  LayoutDashboard,
  Link,
  Wallet,
  History,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      { title: "Introduction", url: "/getting-started/introduction" },
      { title: "Quick Start Guide", url: "/getting-started/quick-start" },
    ],
  },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    items: [{ title: "Overview", url: "/dashboard/overview" }],
  },
  {
    title: "Referral Tool",
    icon: Link,
    items: [
      { title: "Generate and Share", url: "/referral-tool/generate-and-share" },
    ],
  },
  {
    title: "Earnings History",
    icon: History,
    items: [
      { title: "Understanding Earnings & Making Payment Request", url: "/earning-history/earnings" },
    ],
  },
  {
    title: "Payment Request",
    icon: Wallet,
    items: [
      { title: "Understanding Payment Request & Status ", url: "/payment-request/payment-status" },
    ],
  },
  // {
  //   title: "FAQs",
  //   icon: HelpCircle,
  //   items: [{ title: "FAQs", url: "/docs/faqs" }],
  // },
];