// apps/web/src/app/layout.tsx

/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes'

import './globals.css';
import { clientEnv } from '@/env/client';

export const metadata: Metadata = {
  title: clientEnv.NEXT_PUBLIC_APP_NAME || 'Vercel Academy Foundation - Web',
  description: 'VAF Web',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="container mx-auto px-4 py-8">
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        {/* TODO: Convert to next/script (Section 4 Lesson 3) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        </ThemeProvider>
      </body>
    </html>
  );
}
