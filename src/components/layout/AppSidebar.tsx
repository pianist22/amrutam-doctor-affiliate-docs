// "use client";

// import {
//   Sidebar,
//   SidebarContent,
// } from "@/components/ui/sidebar";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";

// import { sidebarItems } from "./SidebarConfig";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useState } from "react";

// export function AppSidebar() {
//   const pathname = usePathname();
//   const [openSections, setOpenSections] = useState<string[]>(["Getting Started"]);

//   const toggleSection = (title: string) => {
//     setOpenSections((prev) =>
//       prev.includes(title)
//         ? prev.filter((t) => t !== title)
//         : [...prev, title]
//     );
//   };

//   return (
//       <Sidebar className="border-r mt-20 bg-gray-50 rounded-xl h-[calc(100vh-80px)]">

//         <SidebarContent className="p-3 space-y-2">

//           {sidebarItems.map((section) => {
//             const isOpen = openSections.includes(section.title);

//             return (
//               <Collapsible key={section.title} open={isOpen}>

//                 {/* HEADER */}
//                 <CollapsibleTrigger
//                   onClick={() => toggleSection(section.title)}
//                   className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
//                 >
//                   <div className="flex items-center gap-2">
//                     <section.icon className="w-4 h-4" />
//                     {section.title}
//                   </div>

//                   {/* ROTATING ICON */}
//                   <ChevronRight
//                     className={cn(
//                       "w-4 h-4 transition-transform",
//                       isOpen && "rotate-90"
//                     )}
//                   />
//                 </CollapsibleTrigger>

//                 {/* ITEMS */}
//                 <CollapsibleContent className="pl-6 mt-1 space-y-1">
//                   {section.items.map((item) => {
//                     const isActive = pathname === item.url;

//                     return (
//                       <Link
//                         key={item.title}
//                         href={item.url}
//                         className={cn(
//                           "block text-sm px-3 py-2 rounded-md transition",
//                           isActive
//                             ? "bg-gray-200 text-green-800 font-semibold"
//                             : "text-gray-600 hover:bg-gray-100"
//                         )}
//                       >
//                         {item.title}
//                       </Link>
//                     );
//                   })}
//                 </CollapsibleContent>

//               </Collapsible>
//             );
//           })}

//         </SidebarContent>
//       </Sidebar>

//   );
// }


// "use client";

// import {
//   Sidebar,
//   SidebarContent,
// } from "@/components/ui/sidebar";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";

// import { sidebarItems } from "./SidebarConfig";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";

// export function AppSidebar() {
//   const pathname = usePathname();

//   const [openSections, setOpenSections] = useState<string[]>([]);

//   // AUTO OPEN ACTIVE SECTION
//   useEffect(() => {
//     const activeSection = sidebarItems.find((section) =>
//       section.items.some((item) => item.url === pathname)
//     );

//     if (activeSection) {
//       setOpenSections([activeSection.title]); // only one open
//     }
//   }, [pathname]);

//   const toggleSection = (title: string) => {
//     setOpenSections((prev) =>
//       prev.includes(title)
//         ? [] // close if already open
//         : [title] // open only one at a time
//     );
//   };

//   return (
//     <Sidebar className="border-r mt-20 bg-gray-50 rounded-xl h-[calc(100vh-80px)]">
//       <SidebarContent className="p-3 space-y-2">

//         {sidebarItems.map((section) => {
//           const isOpen = openSections.includes(section.title);

//           return (
//             <Collapsible key={section.title} open={isOpen}>

//               {/* HEADER */}
//               <CollapsibleTrigger
//                 onClick={() => toggleSection(section.title)}
//                 className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
//               >
//                 <div className="flex items-center gap-2">
//                   <section.icon className="w-4 h-4" />
//                   {section.title}
//                 </div>

//                 {/* ROTATING ICON */}
//                 <ChevronRight
//                   className={cn(
//                     "w-4 h-4 transition-transform",
//                     isOpen && "rotate-90"
//                   )}
//                 />
//               </CollapsibleTrigger>

//               {/* ITEMS */}
//               <CollapsibleContent className="pl-6 mt-1 space-y-1">
//                 {section.items.map((item) => {
//                   const isActive = pathname === item.url;

//                   return (
//                     <Link
//                       key={item.title}
//                       href={item.url}
//                       className={cn(
//                         "block text-sm px-3 py-2 rounded-md transition",
//                         isActive
//                           ? "bg-gray-200 text-green-800 font-semibold"
//                           : "text-gray-600 hover:bg-gray-100"
//                       )}
//                     >
//                       {item.title}
//                     </Link>
//                   );
//                 })}
//               </CollapsibleContent>

//             </Collapsible>
//           );
//         })}

//       </SidebarContent>
//     </Sidebar>
//   );
// }

"use client";

import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { sidebarItems } from "./SidebarConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function AppSidebar() {
  const pathname = usePathname();

  const [openSections, setOpenSections] = useState<string[]>([]);

  // AUTO OPEN ACTIVE SECTION
  useEffect(() => {
    const activeSection = sidebarItems.find((section) =>
      section.items.some((item) => item.url === pathname)
    );

    if (activeSection) {
      setOpenSections([activeSection.title]);
    }
  }, [pathname]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? []
        : [title]
    );
  };

  return (
    <Sidebar className="border-r mt-20 bg-gray-50 rounded-xl h-[calc(100vh-80px)]">

      {/* MAIN SIDEBAR CONTENT */}
      <SidebarContent className="flex flex-col justify-between h-full p-3">

        {/* TOP SECTION */}
        <div className="space-y-2">

          {sidebarItems.map((section) => {
            const isOpen = openSections.includes(section.title);

            return (
              <Collapsible
                key={section.title}
                open={isOpen}
              >

                {/* HEADER */}
                <CollapsibleTrigger
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition"
                >
                  <div className="flex items-center gap-2">
                    <section.icon className="w-4 h-4" />
                    {section.title}
                  </div>

                  {/* ROTATING ICON */}
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isOpen && "rotate-90"
                    )}
                  />
                </CollapsibleTrigger>

                {/* ITEMS */}
                <CollapsibleContent className="pl-6 mt-1 space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.url;

                    return (
                      <Link
                        key={item.title}
                        href={item.url}
                        className={cn(
                          "block text-sm px-3 py-2 rounded-md transition",
                          isActive
                            ? "bg-gray-200 text-green-800 font-semibold"
                            : "text-gray-600 hover:bg-gray-100"
                        )}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </CollapsibleContent>

              </Collapsible>
            );
          })}

        </div>

        {/* FIXED BOTTOM NOTES SECTION */}
        <div className="mt-4 border border-green-200 bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-3 shadow-sm">

          <div className="flex items-start gap-2">

            <div className="bg-green-100 p-2 rounded-lg">
              <Info className="w-4 h-4 text-green-700" />
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-green-800">
                Notes
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-green-700">
                Affiliate Feature is currently available only on the{" "}
                <span className="font-semibold">
                  Web Version
                </span>.
              </p>
            </div>

          </div>

        </div>

      </SidebarContent>
    </Sidebar>
  );
}