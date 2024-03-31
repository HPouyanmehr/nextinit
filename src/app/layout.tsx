import type { Metadata } from 'next';

// Styles
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Init',
  description: 'A different NextJs and TypeScript starter.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
