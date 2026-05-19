import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Download, Send, Mail, Phone, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/i18n/I18nProvider";
import { SectionHeader } from "./About";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export function Contact() {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      toast.success(t.contact.success);
      form.reset();
    } catch {
      toast.error(t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  const links = [
    { icon: Mail, label: "ahmedeid.dev@outlook.com", href: "mailto:ahmedeid.dev@outlook.com" },
    { icon: Phone, label: "+20 106 476 6798", href: "tel:+201064766798" },
    { icon: FaLinkedin, label: "linkedin.com/in/ahmedeid-dev", href: "https://linkedin.com/in/ahmedeid-dev" },
    { icon: FaGithub, label: "github.com/ahmedeid-dev", href: "https://github.com/ahmedeid-dev" },
  ];

  return (
    <section id="contact" className="relative bg-surface/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t.contact.kicker} title={t.contact.title} />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <p className="mb-6 text-muted-foreground">{t.contact.subtitle}</p>
            <div className="space-y-4">
              <Input name="name" placeholder={t.contact.name} required />
              <Input name="email" type="email" placeholder={t.contact.email} required />
              <Textarea
                name="message"
                placeholder={t.contact.message}
                rows={5}
                required
              />
              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" disabled={loading} size="lg" className="gap-2 shadow-glow">
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {loading ? t.contact.sending : t.contact.send}
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="/Ahmed-Eid-CV.pdf" download>
                    <Download className="h-4 w-4" />
                    {t.contact.downloadCv}
                  </a>
                </Button>
              </div>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
              {t.contact.directTitle}
            </h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-all hover:border-primary/40 hover:text-primary"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <l.icon className="h-4 w-4" />
                    </span>
                    <span className="truncate text-sm font-medium">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
