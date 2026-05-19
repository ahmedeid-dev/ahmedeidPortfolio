import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground sm:text-start">
          <p>© {year} Ahmed Eid ElDesouky. {t.footer.rights}</p>
          <p className="mt-0.5 text-xs">{t.footer.built}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ahmedeid-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/ahmedeid-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:ahmedeid.dev@outlook.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            <HiMail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
