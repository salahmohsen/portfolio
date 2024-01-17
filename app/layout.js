import "./globals.css";
import localFont from "next/font/local";
import ThemeProvider from "./utils/themeProvider";

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
    <>
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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="container mx-auto min-h-screen max-w-screen-xl py-24  lg:py-0">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
