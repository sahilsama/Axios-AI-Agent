import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";
import { ClerkProvider } from "@clerk/nextjs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Axios",
  description: "Choose your Model to chat",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >

            <SidebarProvider defaultOpen={false} collapsible={true}>
              <AppSidebar />
              <SidebarTrigger />
              {children}
            </SidebarProvider>
          </body>
        </html>
  </ClerkProvider>
  );
}
