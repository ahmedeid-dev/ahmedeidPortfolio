import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiGraphql,
  SiMongodb,
  SiExpress,
  SiVite,
  SiEslint,
  SiAxios,
  SiApollographql,
  SiMui,
  SiI18Next,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandReact, TbApi, TbUsers, TbBulb, TbShieldLock } from "react-icons/tb";
import type { IconType } from "react-icons";
import { useI18n } from "@/i18n/I18nProvider";
import { SectionHeader } from "./About";

interface Skill {
  name: string;
  icon: IconType;
}

export function Skills() {
  const { t } = useI18n();

  const groups: { title: string; items: Skill[] }[] = [
    {
      title: t.skills.groups.core,
      items: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript ES6+", icon: TbBrandJavascript },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "SCSS", icon: FaSass },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "MUI", icon: SiMui },
        { name: "Apollo Client", icon: SiApollographql },
      ],
    },
    {
      title: t.skills.groups.state,
      items: [
        { name: "Redux", icon: SiRedux },
        { name: "Context API", icon: TbBrandReact },
        { name: "React Query", icon: SiReactquery },
      ],
    },
    {
      title: t.skills.groups.architecture,
      items: [
        { name: "Component Architecture", icon: TbBrandReact },
        { name: "Centralized Architecture", icon: TbApi },
        { name: "SOLID Principles", icon: TbShieldLock },
      ],
    },
    {
      title: t.skills.groups.tools,
      items: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "GraphQL", icon: SiGraphql },
        { name: "REST APIs", icon: TbApi },
        { name: "i18next", icon: SiI18Next },
        { name: "Axios", icon: SiAxios },
        { name: "ESLint", icon: SiEslint },
        { name: "Vite", icon: SiVite },
      ],
    },
    {
      title: t.skills.groups.backend,
      items: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
      ],
    },
    {
      title: t.skills.groups.soft,
      items: [
        { name: "Problem Solving", icon: TbBulb },
        { name: "Team Collaboration", icon: TbUsers },
        { name: "Agile", icon: TbApi },
        { name: "Attention to Detail", icon: TbShieldLock },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t.skills.kicker} title={t.skills.title} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-foreground/90 transition-all hover:border-primary/40 hover:text-primary"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
