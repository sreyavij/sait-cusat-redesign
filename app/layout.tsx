import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SAIT | Students Association of Information Technology, SOE CUSAT',
  description: 'Official portal for Division of Information Technology, School of Engineering, Cochin University of Science and Technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
