"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Shared/Navar";
import { Footer } from "@/components/Shared/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isBusiness = pathname.startsWith("/business");

  return (
    <>
      {!isBusiness && <Navbar />}
      {children}
      {!isBusiness && <Footer />}
    </>
  );
}