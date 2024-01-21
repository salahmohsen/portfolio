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
  description:
    "Salah Mohsen is a front-end developer who builds accessible pixel-perfect, accessible products for the web.",
  manifest: "/images/favicon/site.webmanifest",
  icons: {
    apple: [{ url: "/images/favicon/apple-touch-icon.png" }],
    shortcut: "/images/favicon/favicon.ico",
    icon: [
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} scroll-smooth`}
      suppressHydrationWarning
    >
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
