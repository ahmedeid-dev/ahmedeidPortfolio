import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/i18n/I18nProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmed Eid ElDesouky — Front-End React Developer" },
      {
        name: "description",
        content:
          "Front-End React Developer specialized in scalable dashboards, TypeScript, Next.js, and business web applications. Available for full-time, freelance, and remote work.",
      },
      { property: "og:title", content: "Ahmed Eid ElDesouky — Front-End React Developer" },
      {
        property: "og:description",
        content: "Building scalable dashboards & business web apps with React, TypeScript, and Next.js.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
