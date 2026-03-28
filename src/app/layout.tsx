import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Eliseo Tomás Sanz | Backend Software Developer",
  description: "Desarrollador apasionado con una sólida formación en infraestructuras de alto rendimiento. Especializado en Java, Spring Boot, y Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-950 text-zinc-50 selection:bg-yellow-500/30 selection:text-yellow-200 min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative flex flex-col flex-1 mx-auto w-full max-w-6xl p-4 md:p-8">
            <header className="py-6 flex justify-between items-center mb-12">
              <div className="font-mono text-xl font-bold tracking-tighter">
                <span className="text-yellow-500">~/</span>
                <span>portfolio</span>
                <span className="animate-pulse">_</span>
              </div>
              <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
                <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-yellow-400 transition-colors">Case Studies</a>
                <a href="#experience" className="hover:text-yellow-400 transition-colors">Experience</a>
              </nav>
            </header>
            
            <main className="flex-1 w-full flex flex-col gap-24">
              {children}
            </main>
            
            <footer className="py-8 mt-24 border-t border-zinc-800/50 flex flex-col items-center gap-2 text-sm text-zinc-500 font-mono">
              <div className="flex gap-4 mb-2">
                <a href="mailto:sanzeliseo03@gmail.com" className="hover:text-yellow-400 transition-colors">sanzeliseo03@gmail.com</a>
                <span>|</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">GitHub</a>
                <span>|</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
              </div>
              <span>Diseñado con precisión ingenieril. All systems nominal.</span>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
