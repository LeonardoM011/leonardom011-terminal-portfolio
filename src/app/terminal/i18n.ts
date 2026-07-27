export type Lang = 'en' | 'hr';

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dates: string;
  clients?: string[];
}

export interface ActivityEntry {
  name: string;
  location: string;
  dates: string;
}

export interface Translations {
  // command descriptions
  cmdHelp: string;
  cmdAbout: string;
  cmdSkills: string;
  cmdProjects: string;
  cmdExperience: string;
  cmdActivities: string;
  cmdContact: string;
  cmdWhoami: string;
  cmdLs: string;
  cmdClear: string;
  cmdNeofetch: string;
  cmdLang: string;

  // section titles
  helpTitle: string;
  aboutTitle: string;
  skillsTitle: string;
  projectsTitle: string;
  experienceTitle: string;
  activitiesTitle: string;
  contactTitle: string;

  // whoami
  whoamiRole: string;
  whoamiDesc: string;

  // about
  aboutLine1: string;
  aboutLine2: string;
  aboutLine3: string;
  aboutLine4: string;
  aboutLine5: string;

  // skills categories
  skillsFrontend: string;
  skillsBackend: string;
  skillsDevops: string;
  skillsHomelab: string;
  homelabBullet1: string;
  homelabBullet2: string;
  homelabBullet3: string;
  homelabBullet4: string;

  // projects
  projectTitle1: string;
  projectDesc1: string;
  projectTitle2: string;
  projectDesc2: string;
  projectTitle3: string;
  projectDesc3: string;

  // experience
  experienceClientsLabel: string;
  experience: ExperienceEntry[];

  // activities
  activities: ActivityEntry[];

  // contact
  contactCta: string;

  // lang command
  langCurrentLabel: string;
  langSetMsg: string;
  langUnknown: string;
  langAvailable: string;

  // neofetch
  neofetchUser: string;
  neofetchOs: string;
  neofetchShell: string;
  neofetchStack: string;
  neofetchTheme: string;

  // misc
  sudoMsg: string;
  exitMsg: string;
  errorNotFound: string;
  errorSuffix: string;
}

const en: Translations = {
  cmdHelp: 'Show available commands',
  cmdAbout: 'About me',
  cmdSkills: 'Technical skills',
  cmdProjects: 'My projects',
  cmdExperience: 'Work experience',
  cmdActivities: 'Activities',
  cmdContact: 'Contact information',
  cmdWhoami: 'Quick introduction',
  cmdLs: 'List sections',
  cmdClear: 'Clear the terminal',
  cmdNeofetch: 'System info (portfolio style)',
  cmdLang: 'Switch language  (en | hr)',

  helpTitle: 'Available Commands',
  aboutTitle: 'About Me',
  skillsTitle: 'Technical Skills',
  projectsTitle: 'Projects',
  experienceTitle: 'Experience',
  activitiesTitle: 'Activities',
  contactTitle: 'Contact',

  whoamiRole: 'Full-Stack Developer',
  whoamiDesc: 'Building web apps with Spring Boot and Angular.',

  aboutLine1: 'Hi! I\'m <span class="green">Leonardo</span>, a full-stack developer',
  aboutLine2: 'primarily working with Spring Boot and Spring.',
  aboutLine3: 'I love open source, sys admin and backend development.',
  aboutLine4: 'In my free time, I play electric guitar and drums.',
  aboutLine5: '',

  skillsFrontend: 'Frontend',
  skillsBackend: 'Backend',
  skillsDevops: 'DevOps & Tools',
  skillsHomelab: 'Homelab & Personal Infrastructure',
  homelabBullet1: 'Designed, developed, and launched a personal portfolio website to showcase projects and skills in web development — <a href="https://leonardom011.com" target="_blank" class="link">leonardom011.com</a>',
  homelabBullet2: 'Portfolio website, mail server, Paperless, Obsidian private vault, and other personal projects running on a private Hetzner web server.',
  homelabBullet3: 'Containerization using Docker, with custom-written automatic periodic backups using Borg to a Hetzner Storage Box and remote backups.',
  homelabBullet4: 'Custom firewall and Tailscale private network, with Nginx handling reverse proxy; SSL certificates configured via Cloudflare Tunnel and domains.',

  projectTitle1: 'Dungeon Programmer',
  projectDesc1: 'A game made for the TVZ MC2 competition built with Pixi.JS.',
  projectTitle2: 'Spot A Spot',
  projectDesc2: 'Online platform for creating and managing events made for MC2 competition.',
  projectTitle3: 'KobeGE',
  projectDesc3: 'Game Engine written in C++ using OpenGL.',

  experienceClientsLabel: 'Clients',
  experience: [
    {
      company: 'Mithril',
      role: 'Java Spring Backend Developer',
      location: 'Zagreb, Croatia',
      dates: '06/2025 – 06/2026',
      clients: [
        'ZABA – Zagrebačka banka, IT Department',
        'APIS IT – Croatian Tax Administration (Tax Administration IS)',
        'HPB – Croatian Postal Bank, IT Department',
      ],
    },
    {
      company: 'LAQO – Croatia osiguranje',
      role: 'Junior Java Spring Backend Developer',
      location: 'Zagreb, Croatia',
      dates: '11/2023 – 01/2025',
    },
    {
      company: 'KSET – Electrical Engineering Students’ Club',
      role: 'Volunteer, Computer, Music and Media Section',
      location: 'Zagreb, Croatia',
      dates: '09/2024 – 06/2026',
    },
    {
      company: 'MC2 – TVZ Student Competition',
      role: 'Participant (2 editions, in 2 different teams)',
      location: 'Zagreb, Croatia',
      dates: '2022 – 2024',
    },
  ],

  activities: [
    {
      name: 'Infinum Kotlin Spring Academy',
      location: 'Zagreb, Croatia',
      dates: '2022',
    },
    {
      name: 'WES – Workshop on Embedded Systems by EESTEC',
      location: 'Zagreb, Croatia',
      dates: '2022',
    },
    {
      name: 'HONI – Croatian Open Competition in Informatics',
      location: 'Požega, Croatia',
      dates: '2014 – 2020',
    },
    {
      name: 'Infokup Programming Competition',
      location: 'Požega, Croatia',
      dates: '2016 – 2020',
    },
  ],

  contactCta: "I'm always open to interesting conversations. Say hi!",

  langCurrentLabel: 'Current language:',
  langSetMsg: 'Language set to',
  langUnknown: 'Unknown language. Available:',
  langAvailable: 'en (English), hr (Croatian)',

  neofetchUser: 'user',
  neofetchOs: 'Portfolio Linux',
  neofetchShell: 'portfolio-sh 1.0.0',
  neofetchStack: 'Angular 21 + TS',
  neofetchTheme: 'Gruvbox Dark',

  sudoMsg: 'Nice try. 😄 You are not in the sudoers file.',
  exitMsg: 'There is no escape. You are already home.',
  errorNotFound: 'Command not found:',
  errorSuffix: 'Type <span class="cmd-highlight">help</span> for available commands.',
};

const hr: Translations = {
  cmdHelp: 'Prikaži dostupne naredbe',
  cmdAbout: 'O meni',
  cmdSkills: 'Tehničke vještine',
  cmdProjects: 'Moji projekti',
  cmdExperience: 'Radno iskustvo',
  cmdActivities: 'Aktivnosti',
  cmdContact: 'Kontakt informacije',
  cmdWhoami: 'Kratki uvod',
  cmdLs: 'Prikaži odjeljke',
  cmdClear: 'Očisti terminal',
  cmdNeofetch: 'Informacije o sustavu (portfolio stil)',
  cmdLang: 'Promijeni jezik       (en | hr)',

  helpTitle: 'Dostupne naredbe',
  aboutTitle: 'O meni',
  skillsTitle: 'Tehničke vještine',
  projectsTitle: 'Projekti',
  experienceTitle: 'Radno iskustvo',
  activitiesTitle: 'Aktivnosti',
  contactTitle: 'Kontakt',

  whoamiRole: 'Full-Stack Developer',
  whoamiDesc: 'Izrađujem web aplikacije primarno sa Java Spring Boot i Angular.',

  aboutLine1: "Bok! Ja sam <span class=\"green\">Leonardo</span>, Full-Stack Developer.",
  aboutLine2: 'Primarno se bavim izradom backend aplikacija u Spring-u i Spring Bootu.',
  aboutLine3: 'Volim open source, sys admin i backend development.',
  aboutLine4: 'U slobodno vrijeme sviram električnu gitaru i bubnjeve.',
  aboutLine5: '',

  skillsFrontend: 'Frontend',
  skillsBackend: 'Backend',
  skillsDevops: 'DevOps i alati',
  skillsHomelab: 'Homelab i osobna infrastruktura',
  homelabBullet1: 'Dizajnirao, razvio i pokrenuo osobnu portfolio web stranicu za prikaz projekata i vještina u web razvoju — <a href="https://leonardom011.com" target="_blank" class="link">leonardom011.com</a>',
  homelabBullet2: 'Portfolio web stranica, mail server, Paperless, privatni Obsidian vault i drugi osobni projekti pokrenuti na privatnom Hetzner web serveru.',
  homelabBullet3: 'Kontejnerizacija pomoću Dockera, uz vlastito napisane automatske periodičke backupove korištenjem Borga na Hetzner Storage Box i udaljene backupove.',
  homelabBullet4: 'Vlastiti firewall i Tailscale privatna mreža, uz Nginx koji obavlja reverse proxy; SSL certifikati konfigurirani putem Cloudflare Tunnela i domena.',

  projectTitle1: 'Dungeon programmer',
  projectDesc1: 'Igra napravljena za TVZ MC2 natjecanje izrađena u Pixi.JS.',
  projectTitle2: 'Spot A Spot',
  projectDesc2: 'Online platforma za dijeljenje i kreiranje evenata za TVZ MC2 natjecanje.',
  projectTitle3: 'KobeGE',
  projectDesc3: 'Game Engine napisan u C++ koji koristi OpenGL.',

  experienceClientsLabel: 'Klijenti',
  experience: [
    {
      company: 'Mithril',
      role: 'Java Spring backend programer',
      location: 'Zagreb, Hrvatska',
      dates: '06/2025 – 06/2026',
      clients: [
        'ZABA – Zagrebačka banka, IT sektor',
        'APIS IT – Porezna uprava (IS Porezne uprave)',
        'HPB – Hrvatska poštanska banka, IT sektor',
      ],
    },
    {
      company: 'LAQO – Croatia osiguranje',
      role: 'Junior Java Spring backend programer',
      location: 'Zagreb, Hrvatska',
      dates: '11/2023 – 01/2025',
    },
    {
      company: 'KSET – Klub studenata elektrotehnike',
      role: 'Računarna, Glazbena i Media sekcija',
      location: 'Zagreb, Hrvatska',
      dates: '09/2024 – 06/2026',
    },
    {
      company: 'MC2 – Studentsko natjecanje TVZ-a',
      role: 'Sudionik (2 puta, u 2 različita tima)',
      location: 'Zagreb, Hrvatska',
      dates: '2022 – 2024',
    },
  ],

  activities: [
    {
      name: 'Infinum Kotlin Spring Academy',
      location: 'Zagreb, Hrvatska',
      dates: '2022',
    },
    {
      name: 'WES – Workshop on Embedded Systems by EESTEC',
      location: 'Zagreb, Hrvatska',
      dates: '2022',
    },
    {
      name: 'HONI – Hrvatsko otvoreno natjecanje u informatici',
      location: 'Požega, Hrvatska',
      dates: '2014 – 2020',
    },
    {
      name: 'Infokup natjecanje u programiranju',
      location: 'Požega, Hrvatska',
      dates: '2016 – 2020',
    },
  ],

  contactCta: 'Otvoren sam za razgovor. Javi se!',

  langCurrentLabel: 'Trenutni jezik:',
  langSetMsg: 'Jezik postavljen na',
  langUnknown: 'Nepoznati jezik. Dostupno:',
  langAvailable: 'en (Engleski), hr (Hrvatski)',

  neofetchUser: 'korisnik',
  neofetchOs: 'Portfolio Linux',
  neofetchShell: 'portfolio-sh 1.0.0',
  neofetchStack: 'Angular 21 + TS',
  neofetchTheme: 'Gruvbox Dark',

  sudoMsg: 'Dobar pokušaj. 😄 Nisi u sudoers datoteci.',
  exitMsg: 'Nema izlaza. Već si doma.',
  errorNotFound: 'Naredba nije pronađena:',
  errorSuffix: 'Upiši <span class="cmd-highlight">help</span> za dostupne naredbe.',
};

export const TRANSLATIONS: Record<Lang, Translations> = { en, hr };

export const LANG_LABELS: Record<Lang, string> = {
  en: 'English',
  hr: 'Hrvatski',
};
