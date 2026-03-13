import { TerminalLine } from './terminal';
import { Lang, TRANSLATIONS, LANG_LABELS, Translations } from './i18n';

type CommandResult = TerminalLine[];

export function getCommandDescriptions(lang: Lang): Record<string, string> {
  const t = TRANSLATIONS[lang];
  return {
    help: t.cmdHelp,
    about: t.cmdAbout,
    skills: t.cmdSkills,
    projects: t.cmdProjects,
    contact: t.cmdContact,
    whoami: t.cmdWhoami,
    ls: t.cmdLs,
    lang: t.cmdLang,
    neofetch: t.cmdNeofetch,
    clear: t.cmdClear,
  };
}

export function runCommand(input: string, lang: Lang): CommandResult {
  const t = TRANSLATIONS[lang];
  const [cmd, ...args] = input.trim().split(/\s+/);
  const lower = cmd.toLowerCase();

  switch (lower) {
    case 'help':     return helpCmd(lang);
    case 'about':    return aboutCmd(t);
    case 'skills':   return skillsCmd(t);
    case 'projects': return projectsCmd(t);
    case 'contact':  return contactCmd(t);
    case 'whoami':   return whoamiCmd(t);
    case 'ls':       return lsCmd();
    case 'neofetch': return neofetchCmd(t);
    // 'lang' is handled by terminal.ts before reaching here
    case 'sudo':     return [{ type: 'output', content: t.sudoMsg }];
    case 'exit':
    case 'quit':     return [{ type: 'output', content: t.exitMsg }];
    case 'pwd':      return [{ type: 'output', content: '/home/visitor/portfolio' }];
    case 'date':     return [{ type: 'output', content: new Date().toString() }];
    case 'echo':     return [{ type: 'output', content: args.join(' ') }];
    default:
      return [{
        type: 'error',
        content: `${t.errorNotFound} <span class="cmd-highlight">${escHtml(cmd)}</span>. ${t.errorSuffix}`,
        isHtml: true,
      }];
  }
}

function helpCmd(lang: Lang): CommandResult {
  const t = TRANSLATIONS[lang];
  const cmds = getCommandDescriptions(lang);
  const lines: TerminalLine[] = [
    { type: 'output', content: `<span class="section-title">${t.helpTitle}</span>`, isHtml: true },
    {
      type: 'output',
      content: '<span class="dim">────────────────────────────────────────────</span>',
      isHtml: true,
    },
  ];
  for (const [name, desc] of Object.entries(cmds)) {
    lines.push({
      type: 'output',
      content: `  <span class="cmd-highlight cmd-btn">${name.padEnd(12)}</span><span class="dim">${desc}</span>`,
      isHtml: true,
      clickCommand: name,
    });
  }
  return lines;
}

function whoamiCmd(t: Translations): CommandResult {
  return [
    { type: 'output', content: `<span class="green">Leonardo</span> — ${t.whoamiRole}`, isHtml: true },
    { type: 'output', content: t.whoamiDesc },
  ];
}

function aboutCmd(t: Translations): CommandResult {
  return [
    { type: 'output', content: `<span class="section-title">${t.aboutTitle}</span>`, isHtml: true },
    { type: 'output', content: '<span class="dim">────────────────────────────────────────────</span>', isHtml: true },
    { type: 'output', content: `  ${t.aboutLine1}`, isHtml: true },
    { type: 'output', content: `  ${t.aboutLine2}` },
    { type: 'blank', content: '' },
    { type: 'output', content: `  ${t.aboutLine3}` },
    { type: 'output', content: `  ${t.aboutLine4}` },
    { type: 'output', content: `  ${t.aboutLine5}` },
    { type: 'blank', content: '' },
    { type: 'output', content: `  <span class="dim">${t.aboutLabelLocation}</span>  🌍 Brazil`, isHtml: true },
    { type: 'output', content: `  <span class="dim">${t.aboutLabelStatus}</span>    ${t.aboutStatusValue}`, isHtml: true },
  ];
}

function skillsCmd(t: Translations): CommandResult {
  return [
    { type: 'output', content: `<span class="section-title">${t.skillsTitle}</span>`, isHtml: true },
    { type: 'output', content: '<span class="dim">────────────────────────────────────────────</span>', isHtml: true },
    { type: 'output', content: `  <span class="yellow">${t.skillsFrontend}</span>`, isHtml: true },
    { type: 'output', content: '  ├─ Angular, React, Vue' },
    { type: 'output', content: '  ├─ TypeScript / JavaScript (ES2022+)' },
    { type: 'output', content: '  └─ Tailwind CSS, SCSS' },
    { type: 'blank', content: '' },
    { type: 'output', content: `  <span class="yellow">${t.skillsBackend}</span>`, isHtml: true },
    { type: 'output', content: '  ├─ Node.js, Express, Fastify' },
    { type: 'output', content: '  ├─ PostgreSQL, MongoDB, Redis' },
    { type: 'output', content: '  └─ REST APIs, GraphQL' },
    { type: 'blank', content: '' },
    { type: 'output', content: `  <span class="yellow">${t.skillsDevops}</span>`, isHtml: true },
    { type: 'output', content: '  ├─ Docker, Linux' },
    { type: 'output', content: '  ├─ Git, GitHub Actions' },
    { type: 'output', content: '  └─ Nginx, VPS deployment' },
  ];
}

function projectsCmd(t: Translations): CommandResult {
  const projects = [
    { name: t.projectTitle1, tech: 'Angular 21, TypeScript', desc: t.projectDesc1, url: 'github.com/leonardom011/terminal-portfolio' },
    { name: t.projectTitle2, tech: 'Node.js, PostgreSQL',    desc: t.projectDesc2, url: 'github.com/leonardom011/project-alpha' },
    { name: t.projectTitle3, tech: 'React, Redis, WebSockets', desc: t.projectDesc3, url: 'github.com/leonardom011/project-beta' },
  ];

  const lines: TerminalLine[] = [
    { type: 'output', content: `<span class="section-title">${t.projectsTitle}</span>`, isHtml: true },
    { type: 'output', content: '<span class="dim">────────────────────────────────────────────</span>', isHtml: true },
  ];

  for (const p of projects) {
    lines.push({ type: 'blank', content: '' });
    lines.push({ type: 'output', content: `  <span class="green">▸ ${escHtml(p.name)}</span>  <span class="dim">[${escHtml(p.tech)}]</span>`, isHtml: true });
    lines.push({ type: 'output', content: `    ${p.desc}` });
    lines.push({ type: 'output', content: `    <span class="dim">→ ${escHtml(p.url)}</span>`, isHtml: true });
  }

  return lines;
}

function contactCmd(t: Translations): CommandResult {
  return [
    { type: 'output', content: `<span class="section-title">${t.contactTitle}</span>`, isHtml: true },
    { type: 'output', content: '<span class="dim">────────────────────────────────────────────</span>', isHtml: true },
    { type: 'blank', content: '' },
    { type: 'output', content: `  <span class="dim">Email</span>     <a href="mailto:leo@example.com" class="link">leo@example.com</a>`, isHtml: true },
    { type: 'output', content: `  <span class="dim">GitHub</span>    <a href="https://github.com/leonardom011" target="_blank" class="link">github.com/leonardom011</a>`, isHtml: true },
    { type: 'output', content: `  <span class="dim">LinkedIn</span>  <a href="https://linkedin.com/in/leonardom011" target="_blank" class="link">linkedin.com/in/leonardom011</a>`, isHtml: true },
    { type: 'blank', content: '' },
    { type: 'output', content: `  <span class="dim">${t.contactCta}</span>`, isHtml: true },
  ];
}

function lsCmd(): CommandResult {
  return [{
    type: 'output',
    content: `<span class="green">about</span>  <span class="green">skills</span>  <span class="green">projects</span>  <span class="green">contact</span>`,
    isHtml: true,
  }];
}

function neofetchCmd(t: Translations): CommandResult {
  return [
    { type: 'output', content: `<span class="green">         .          </span>  <span class="green">${t.neofetchUser}</span><span class="dim">@</span><span class="green">leonardom011</span>`, isHtml: true },
    { type: 'output', content: `<span class="green">        /|\\         </span>  <span class="dim">──────────────────</span>`, isHtml: true },
    { type: 'output', content: `<span class="green">       / | \\        </span>  <span class="dim">OS:</span>     ${t.neofetchOs}`, isHtml: true },
    { type: 'output', content: `<span class="green">      /  |  \\       </span>  <span class="dim">Host:</span>   leonardom011.dev`, isHtml: true },
    { type: 'output', content: `<span class="green">     /   |   \\      </span>  <span class="dim">Shell:</span>  ${t.neofetchShell}`, isHtml: true },
    { type: 'output', content: `<span class="green">    /____|____\\     </span>  <span class="dim">Stack:</span>  ${t.neofetchStack}`, isHtml: true },
    { type: 'output', content: `<span class="green">                   </span>  <span class="dim">Theme:</span>  ${t.neofetchTheme}`, isHtml: true },
    { type: 'output', content: `<span class="green">                   </span>  <span class="yellow">██</span><span class="green">██</span><span class="dim">██</span><span class="link">██</span>`, isHtml: true },
  ];
}

export function langInfoCmd(current: Lang): CommandResult {
  const t = TRANSLATIONS[current];
  return [
    {
      type: 'output',
      content: `${t.langCurrentLabel} <span class="green">${LANG_LABELS[current]}</span> <span class="dim">(${current})</span>`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `<span class="dim">${t.langAvailable}</span>`,
      isHtml: true,
    },
  ];
}

export function langSetCmd(next: Lang, t: Translations): CommandResult {
  return [{
    type: 'output',
    content: `${t.langSetMsg} <span class="green">${LANG_LABELS[next]}</span>.`,
    isHtml: true,
  }];
}

export function langErrorCmd(t: Translations): CommandResult {
  return [{
    type: 'error',
    content: `${t.langUnknown} <span class="cmd-highlight">en</span>, <span class="cmd-highlight">hr</span>`,
    isHtml: true,
  }];
}

function escHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
