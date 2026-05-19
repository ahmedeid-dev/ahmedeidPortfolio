export type Locale = "en" | "ar";

export const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Ahmed Eid ElDesouky",
      tagline: "Building scalable dashboards & business web apps",
      roles: [
        "Front-End React Developer",
        "Next.js Developer",
        "TypeScript Enthusiast",
        "Open to Full-Time & Freelance",
      ],
      viewWork: "View My Work",
      downloadCv: "Download CV",
    },
    availability: {
      title: "Availability",
      fullTime: "Full-Time",
      partTime: "Part-Time",
      freelance: "Freelance",
      remote: "Remote",
      relocation: "Open to Relocation",
    },
    about: {
      title: "About Me",
      kicker: "Who I am",
      body: "Front-End React Developer with strong experience in React, TypeScript, and Redux. Specialized in building scalable dashboards and business web applications across logistics, POS, and ERP domains. Focused on clean, maintainable code, performance, and UI/UX best practices.",
      availabilityStatement:
        "Currently available for Full-Time, Part-Time, Freelance, and Remote opportunities. Open to relocation anywhere in Egypt or internationally.",
      educationTitle: "Education",
      education: "B.Sc. Information Systems — Banha University (2021)",
      certTitle: "Certification",
      cert: "Full Stack Web Development — Route IT Training Center (2023)",
      certDetail: "React, Next.js, TypeScript, Node.js, Express, MongoDB",
    },
    experience: {
      title: "Experience",
      kicker: "My journey",
      present: "Present",
      items: [
        {
          company: "Accurate Smart Solutions",
          role: "Front-End React Developer",
          date: "Dec 2024 – Present",
          location: "Banha",
          bullets: [
            "Developed and maintained responsive web apps and dashboards using React, TypeScript, Redux.",
            "Integrated GraphQL APIs for Logistics, Freight, POS, and ERP systems.",
            "Implemented state management and contributed to UI/UX and reusable component design.",
          ],
        },
        {
          company: "GoServ Ultimate Solutions",
          role: "Front-End React Developer",
          date: "Aug 2024 – Oct 2024",
          location: "Mansoura",
          bullets: [
            "Built interfaces for Salla and Tailor dashboards.",
            "Collaborated with designers and backend devs on responsive web solutions.",
            "Increased user retention 25% on a high-traffic e-commerce platform using React.js.",
          ],
        },
        {
          company: "Dr-Code Software Solutions",
          role: "Front-End React Developer",
          date: "Apr 2024 – Aug 2024",
          location: "Giza",
          bullets: [
            "Implemented UIs for NGO, Mwasla, and KSB Garage dashboards.",
            "Ensured responsiveness and cross-device performance.",
            "Testing and debugging for quality assurance.",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      kicker: "What I work with",
      groups: {
        core: "Core & UI",
        state: "State Management",
        architecture: "Architecture",
        tools: "Tools",
        backend: "Backend (Familiar)",
        soft: "Soft Skills",
      },
    },
    contact: {
      title: "Let's Work Together",
      kicker: "Get in touch",
      subtitle:
        "Have a role, a project, or just want to chat? Drop a message — I usually reply within a day.",
      name: "Your name",
      email: "Email address",
      message: "Tell me about your project…",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please email me directly.",
      downloadCv: "Download CV",
      directTitle: "Or reach me directly",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Crafted with React, TypeScript & Tailwind.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      experience: "الخبرات",
      skills: "المهارات",
      contact: "تواصل",
    },
    hero: {
      greeting: "مرحبًا، أنا",
      name: "أحمد عيد الدسوقي",
      tagline: "أُطوّر لوحات تحكم وتطبيقات أعمال قابلة للتوسع",
      roles: [
        "مطور واجهات أمامية React",
        "مطور Next.js",
        "مهتم بـ TypeScript",
        "متاح لوظائف دائمة ومشاريع حرة",
      ],
      viewWork: "شاهد أعمالي",
      downloadCv: "تحميل السيرة الذاتية",
    },
    availability: {
      title: "التوفر",
      fullTime: "دوام كامل",
      partTime: "دوام جزئي",
      freelance: "فريلانس",
      remote: "عن بُعد",
      relocation: "قابل للتنقل لأي مكان",
    },
    about: {
      title: "نبذة عني",
      kicker: "من أنا",
      body: "مطور واجهات أمامية React بخبرة قوية في React وTypeScript وRedux. متخصص في بناء لوحات تحكم وتطبيقات أعمال قابلة للتوسع في مجالات الخدمات اللوجستية ونقاط البيع وأنظمة تخطيط موارد المؤسسات. أركز على كتابة كود نظيف وقابل للصيانة، والأداء العالي، وأفضل ممارسات تجربة المستخدم.",
      availabilityStatement:
        "متاح حاليًا لفرص العمل بدوام كامل، جزئي، فريلانس، وعن بُعد. قابل للتنقل لأي مكان داخل مصر أو دوليًا.",
      educationTitle: "التعليم",
      education: "بكالوريوس نظم المعلومات — جامعة بنها (2021)",
      certTitle: "الشهادات",
      cert: "تطوير الويب Full Stack — مركز Route للتدريب (2023)",
      certDetail: "React, Next.js, TypeScript, Node.js, Express, MongoDB",
    },
    experience: {
      title: "الخبرات",
      kicker: "مسيرتي المهنية",
      present: "حتى الآن",
      items: [
        {
          company: "Accurate Smart Solutions",
          role: "مطور واجهات أمامية React",
          date: "ديسمبر 2024 – حتى الآن",
          location: "بنها",
          bullets: [
            "تطوير وصيانة تطبيقات ولوحات تحكم متجاوبة باستخدام React وTypeScript وRedux.",
            "دمج واجهات GraphQL لأنظمة الخدمات اللوجستية، الشحن، نقاط البيع، وERP.",
            "تطبيق إدارة الحالة والمساهمة في تصميم مكونات قابلة لإعادة الاستخدام.",
          ],
        },
        {
          company: "GoServ Ultimate Solutions",
          role: "مطور واجهات أمامية React",
          date: "أغسطس 2024 – أكتوبر 2024",
          location: "المنصورة",
          bullets: [
            "بناء واجهات لوحات تحكم Salla وTailor.",
            "التعاون مع المصممين ومطوري الـ Backend لتقديم حلول ويب متجاوبة.",
            "زيادة الاحتفاظ بالمستخدمين بنسبة 25% على منصة تجارة إلكترونية عالية الزيارات.",
          ],
        },
        {
          company: "Dr-Code Software Solutions",
          role: "مطور واجهات أمامية React",
          date: "أبريل 2024 – أغسطس 2024",
          location: "الجيزة",
          bullets: [
            "تنفيذ واجهات NGO وMwasla وKSB Garage.",
            "ضمان التجاوب والأداء عبر جميع الأجهزة.",
            "الاختبار وتصحيح الأخطاء لضمان الجودة.",
          ],
        },
      ],
    },
    skills: {
      title: "المهارات",
      kicker: "ما أعمل به",
      groups: {
        core: "الأساسيات وواجهة المستخدم",
        state: "إدارة الحالة",
        architecture: "البنية المعمارية",
        tools: "الأدوات",
        backend: "Backend (إلمام)",
        soft: "المهارات الشخصية",
      },
    },
    contact: {
      title: "لنعمل سويًا",
      kicker: "تواصل معي",
      subtitle:
        "لديك وظيفة أو مشروع أو فكرة؟ راسلني — عادةً أرد خلال يوم.",
      name: "اسمك",
      email: "البريد الإلكتروني",
      message: "أخبرني عن مشروعك…",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال…",
      success: "تم إرسال الرسالة! سأرد عليك قريبًا.",
      error: "حدث خطأ ما. الرجاء مراسلتي مباشرة.",
      downloadCv: "تحميل السيرة الذاتية",
      directTitle: "أو تواصل معي مباشرة",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      built: "صُمم بـ React وTypeScript وTailwind.",
    },
  },
} as const;

export type Messages = typeof messages.en;
