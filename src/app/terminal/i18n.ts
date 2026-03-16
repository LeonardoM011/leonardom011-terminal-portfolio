export type Lang = 'en' | 'hr';

export interface Translations {
  // command descriptions
  cmdHelp: string;
  cmdAbout: string;
  cmdSkills: string;
  cmdProjects: string;
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

  // projects
  projectTitle1: string;
  projectDesc1: string;
  projectTitle2: string;
  projectDesc2: string;
  projectTitle3: string;
  projectDesc3: string;

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

  projectTitle1: 'Dungeon Programmer',
  projectDesc1: 'A game made for the TVZ MC2 competition built with Pixi.JS.',
  projectTitle2: 'Spot A Spot',
  projectDesc2: 'Online platform for creating and managing events made for MC2 competition.',
  projectTitle3: 'KobeGE',
  projectDesc3: 'Game Engine written in C++ using OpenGL.',

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

  projectTitle1: 'Dungeon programmer',
  projectDesc1: 'Igra napravljena za TVZ MC2 natjecanje izrađena u Pixi.JS.',
  projectTitle2: 'Spot A Spot',
  projectDesc2: 'Online platforma za dijeljenje i kreiranje evenata za TVZ MC2 natjecanje.',
  projectTitle3: 'KobeGE',
  projectDesc3: 'Game Engine napisan u C++ koji koristi OpenGL.',

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
