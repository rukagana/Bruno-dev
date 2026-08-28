import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bruno Dev - Portfolio',
  description: 'Welcome to my portfolio website',
  keywords: ['portfolio', 'developer', 'bruno'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">{children}</body>
    </html>
  );
}
