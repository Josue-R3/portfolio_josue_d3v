// components/layout/PageWrapper.js

import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background">
        {/* Espaciado responsivo: menos margen en desktop (md:px-8) y más en mobile (px-6) */}
        <div className="container mt-20 mx-auto py-4 px-6 md:px-8">
          {children}
        </div>
      </div>
    </>
  );
}
