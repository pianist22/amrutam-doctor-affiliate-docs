import Navbar from "@/components/Navbar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Amrutam Doctor Affiliate Docs",
  description: "Documentation for Amrutam Affiliate Doctor Portal",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-mono">
        <SidebarProvider>

          {/* FULL PAGE */}
          <div className="w-full flex flex-col min-h-screen">

            {/* NAVBAR */}
            <Navbar />

            {/* MAIN SECTION */}
            <div className="flex flex-1">

              {/* SIDEBAR */}
              <aside className="hidden md:block w-64 border-r bg-gray-50">
                <AppSidebar />
              </aside>

              {/* CONTENT */}
              <main className="flex-1 p-6 bg-white">
                {children}
              </main>

            </div>

          </div>

        </SidebarProvider>
      </body>
    </html>
  );
}