import Header from "@/components/layout/Header";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-full min-h-screen">
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </div>
    </>
  );
}
