// src/app/layout.tsx
import "./globals.css"

import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme/ThemeProvider"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "O Poder de Construir Riqueza",
    description:
        "Construa riqueza, posicione seu valor e viva o próximo nível da sua história.",
}

const setInitialTheme = `
(function () {
  try {
    const key = 'autentika-theme';
    const stored = localStorage.getItem(key);
    if (stored === 'dark') { document.documentElement.classList.add('dark'); return; }
    if (stored === 'light') { document.documentElement.classList.remove('dark'); return; }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  } catch {}
})();
`

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        </head>

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="autentika-theme"
        >
            {children}
        </ThemeProvider>

        <Script id="facebook-pixel" strategy="afterInteractive">
            {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '920393417700169');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
            <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=920393417700169&ev=PageView&noscript=1"
                alt=""
            />
        </noscript>
        </body>
        </html>
    )
}