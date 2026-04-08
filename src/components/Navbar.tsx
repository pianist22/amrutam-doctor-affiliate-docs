"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import Link from "next/link";

export default function Navbar() {
  return (
<nav className="w-full border-b fixed bg-white">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">

        {/* LEFT */}
        <div className="flex items-center gap-3">
        
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/icons/logo.png" alt="Logo" width={60} height={60} />
          </Link>

          {/* CLEAN HAMBURGER (from shadcn) */}
          <SidebarTrigger className="md:hidden text-green-700" />

        {/* BRAND NAME */}
        <Link href="/" className="hidden sm:flex items-center gap-2">
          <Image
            src="/images/icons/amrutam-brand-name.png"
            alt="Brand"
            width={140}
            height={60}
            className="hidden sm:block"
            loading="eager"
            style={{
              height: "auto",
              width: "auto"
            }}
          />
        </Link>
        </div>

        {/* RIGHT */}
        {/* <div className="relative w-[140px] sm:w-[220px] md:w-[320px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search..." className="pl-9 rounded-xl" />
        </div> */}

      </div>
</nav>
  );
}