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
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <body
          className={
            "text-pretty bg-light text-night antialiased transition-colors duration-500 ease-in-out selection:bg-night selection:text-light dark:bg-night dark:text-light dark:selection:bg-light dark:selection:text-night"
          }
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="container mx-auto min-h-screen max-w-screen-xl">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
