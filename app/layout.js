import "./globals.css";
import localFont from "next/font/local";
import ThemeProvider from "./lib/themeProvider";
import IntersectionProvider from "./lib/intersectionProvider";

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  display: "swap",
});

export const metadata = {
  title: "Salah Mohsen",
  description: "Designer & Developer",
};

export default function RootLayout({ children }) {
  const title = children;
  return (
    <html
      lang="en"
      className={`${inter.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
      </head>
      <body
        className={
          "text-pretty bg-light leading-relaxed text-night antialiased transition-colors duration-500 ease-in-out selection:bg-night selection:text-light dark:bg-night dark:text-light dark:selection:bg-light dark:selection:text-night"
        }
      >
        <ThemeProvider attribute="class" enableSystem={false}>
          <IntersectionProvider>
            <div className="container mx-auto min-h-screen max-w-screen-xl py-24  lg:py-0">
              {children}
            </div>
          </IntersectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
