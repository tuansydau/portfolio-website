import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tuan Dau',
  description: "Tuan Dau's Software Portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.fibr.shop" />
        <link rel="dns-prefetch" href="https://cdn.fibr.shop" />
        <script
          src="https://cdn.fibr.shop/sdks/client/669df50c9370be37e3f49706/fpt-client-sdk.min.js"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.fibrConfig = {pageLoad:"async"};
              var root = document.querySelector(":root");
              function scriptFailed () { document.querySelector(":root").style.filter = 'blur(0px)'; document.querySelector(":root").style.opacity = 1 };
              localStorage.setItem('__fibr_current_url', window.location.href);
              let imgStyle = document.createElement('style'); imgStyle.id = 'fibr-async-img-style'; imgStyle.innerHTML = "img { opacity: 0; }";
              let bodyStyle = document.createElement('style'); bodyStyle.id = 'fibr-style'; bodyStyle.innerHTML = "body { opacity: 0; }";
              document.head.appendChild(bodyStyle);
              document.head.appendChild(imgStyle);
            `
          }}
        ></script>
        <link
          href="https://api.fontshare.com/v2/css?f[]=khand@400&f[]=array@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=zodiak@901,700,800,401,301,400,101,1,801,701,900,300,100,2&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://api.fontshare.com/v2/css?f[]=comico@400&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
