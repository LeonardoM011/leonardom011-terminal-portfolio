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
  aboutLabelLocation: string;
  aboutLabelStatus: string;
  aboutStatusValue: string;

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
  whoamiDesc: 'Building web apps with Angular, Node.js, and everything in between.',

  aboutLine1: "Hi! I'm <span class=\"green\">Leonardo</span>, a full-stack developer passionate about",
  aboutLine2: 'building clean, performant, and beautiful web experiences.',
  aboutLine3: 'I love open source, terminal aesthetics, and well-crafted UIs.',
  aboutLine4: "When I'm not coding I'm probably reading, hiking, or tinkering",
  aboutLine5: 'with some side project at 2 AM.',
  aboutLabelLocation: 'Location:',
  aboutLabelStatus: 'Status:',
  aboutStatusValue: 'Open to new opportunities',

  skillsFrontend: 'Frontend',
  skillsBackend: 'Backend',
  skillsDevops: 'DevOps & Tools',

  projectTitle1: 'Terminal Portfolio',
  projectDesc1: 'This interactive terminal-style portfolio site.',
  projectTitle2: 'Project Alpha',
  projectDesc2: 'A RESTful API with authentication and role management.',
  projectTitle3: 'Project Beta',
  projectDesc3: 'Real-time collaboration tool with live cursors.',

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

  whoamiRole: 'Full-Stack Programer',
  whoamiDesc: 'Izrađujem web aplikacije s Angularom, Node.js-om i svime između.',

  aboutLine1: "Bok! Ja sam <span class=\"green\">Leonardo</span>, full-stack programer strastveno zainteresiran za",
  aboutLine2: 'izgradnju čistih, performantnih i lijepih web iskustava.',
  aboutLine3: 'Volim open source, terminalsku estetiku i dobro oblikovana sučelja.',
  aboutLine4: 'Kad ne kodiram, vjerojatno čitam, planinaram ili petljam',
  aboutLine5: 's nekim sporednim projektom u 2 ujutro.',
  aboutLabelLocation: 'Lokacija:',
  aboutLabelStatus: 'Status:',
  aboutStatusValue: 'Otvoren za nove prilike',

  skillsFrontend: 'Frontend',
  skillsBackend: 'Backend',
  skillsDevops: 'DevOps i alati',

  projectTitle1: 'Terminal Portfolio',
  projectDesc1: 'Ovaj interaktivni portfolio u stilu terminala.',
  projectTitle2: 'Projekt Alpha',
  projectDesc2: 'RESTful API s autentikacijom i upravljanjem ulogama.',
  projectTitle3: 'Projekt Beta',
  projectDesc3: 'Alat za suradnju u stvarnom vremenu s live kursorima.',

  contactCta: 'Uvijek sam otvoren za zanimljive razgovore. Javi se!',

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