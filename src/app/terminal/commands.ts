import { TerminalLine } from './terminal';

type CommandResult = TerminalLine[];

export const COMMANDS: Record<string, string> = {
  help: 'Show available commands',
  about: 'About me',
  skills: 'Technical skills',
  projects: 'My projects',
  contact: 'Contact information',
  whoami: 'Quick introduction',
  ls: 'List sections',
  clear: 'Clear the terminal',
  neofetch: 'System info (portfolio style)',
};

export function runCommand(input: string): CommandResult {
  const [cmd, ...args] = input.trim().split(/\s+/);
  const lower = cmd.toLowerCase();

  switch (lower) {
    case 'help':
      return helpCmd();
    case 'about':
      return aboutCmd();
    case 'skills':
      return skillsCmd();
    case 'projects':
      return projectsCmd();
    case 'contact':
      return contactCmd();
    case 'whoami':
      return whoamiCmd();
    case 'ls':
      return lsCmd();
    case 'neofetch':
      return neofetchCmd();
    case 'sudo':
      return [{ type: 'output', content: 'Nice try. 😄 You are not in the sudoers file.' }];
    case 'exit':
    case 'quit':
      return [{ type: 'output', content: 'There is no escape. You are already home.' }];
    case 'pwd':
      return [{ type: 'output', content: '/home/visitor/portfolio' }];
    case 'date':
      return [{ type: 'output', content: new Date().toString() }];
    case 'echo':
      return [{ type: 'output', content: args.join(' ') }];
    default:
      return [
        {
          type: 'error',
          content: `Command not found: <span class="cmd-highlight">${escHtml(cmd)}</span>. Type <span class="cmd-highlight">help</span> for available commands.`,
          isHtml: true,
        },
      ];
  }
}

function helpCmd(): CommandResult {
  const lines: TerminalLine[] = [
    { type: 'output', content: '<span class="section-title">Available Commands</span>', isHtml: true },
    { type: 'output', content: '<span class="dim">─────────────────────────────────────</span>', isHtml: true },
  ];
  for (const [cmd, desc] of Object.entries(COMMANDS)) {
    lines.push({
      type: 'output',
      content: `  <span class="cmd-highlight cmd-btn">${cmd.padEnd(12)}</span><span class="dim">${desc}</span>`,
      isHtml: true,
      clickCommand: cmd,
    });
  }
  return lines;
}

function whoamiCmd(): CommandResult {
  return [
    {
      type: 'output',
      content: `<span class="green">Leonardo</span> — Full-Stack Developer`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `Building web apps with Angular, Node.js, and everything in between.`,
    },
  ];
}

function aboutCmd(): CommandResult {
  return [
    { type: 'output', content: '<span class="section-title">About Me</span>', isHtml: true },
    { type: 'output', content: '<span class="dim">─────────────────────────────────────</span>', isHtml: true },
    {
      type: 'output',
      content: `  Hi! I'm <span class="green">Leonardo</span>, a full-stack developer passionate about`,
      isHtml: true,
    },
    { type: 'output', content: `  building clean, performant, and beautiful web experiences.` },
    { type: 'blank', content: '' },
    { type: 'output', content: `  I love open source, terminal aesthetics, and well-crafted UIs.` },
    { type: 'output', content: `  When I'm not coding I'm probably reading, hiking, or tinkering` },
    { type: 'output', content: `  with some side project at 2 AM.` },
    { type: 'blank', content: '' },
    { type: 'output', content: `  <span class="dim">Location:</span>  🌍 Brazil`, isHtml: true },
    { type: 'output', content: `  <span class="dim">Status:</span>    Open to new opportunities`, isHtml: true },
  ];
}

function skillsCmd(): CommandResult {
  return [
    { type: 'output', content: '<span class="section-title">Technical Skills</span>', isHtml: true },
    { type: 'output', content: '<span class="dim">─────────────────────────────────────</span>', isHtml: true },
    {
      type: 'output',
      content: `  <span class="yellow">Frontend</span>`,
      isHtml: true,
    },
    { type: 'output', content: `  ├─ Angular, React, Vue`, },
    { type: 'output', content: `  ├─ TypeScript / JavaScript (ES2022+)`, },
    { type: 'output', content: `  └─ Tailwind CSS, SCSS`, },
    { type: 'blank', content: '' },
    {
      type: 'output',
      content: `  <span class="yellow">Backend</span>`,
      isHtml: true,
    },
    { type: 'output', content: `  ├─ Node.js, Express, Fastify`, },
    { type: 'output', content: `  ├─ PostgreSQL, MongoDB, Redis`, },
    { type: 'output', content: `  └─ REST APIs, GraphQL`, },
    { type: 'blank', content: '' },
    {
      type: 'output',
      content: `  <span class="yellow">DevOps & Tools</span>`,
      isHtml: true,
    },
    { type: 'output', content: `  ├─ Docker, Linux`, },
    { type: 'output', content: `  ├─ Git, GitHub Actions`, },
    { type: 'output', content: `  └─ Nginx, VPS deployment`, },
  ];
}

function projectsCmd(): CommandResult {
  const projects = [
    {
      name: 'Terminal Portfolio',
      tech: 'Angular 21, TypeScript',
      desc: 'This interactive terminal-style portfolio site.',
      url: 'github.com/leonardom011/terminal-portfolio',
    },
    {
      name: 'Project Alpha',
      tech: 'Node.js, PostgreSQL',
      desc: 'A RESTful API with authentication and role management.',
      url: 'github.com/leonardom011/project-alpha',
    },
    {
      name: 'Project Beta',
      tech: 'React, Redis, WebSockets',
      desc: 'Real-time collaboration tool with live cursors.',
      url: 'github.com/leonardom011/project-beta',
    },
  ];

  const lines: TerminalLine[] = [
    { type: 'output', content: '<span class="section-title">Projects</span>', isHtml: true },
    { type: 'output', content: '<span class="dim">─────────────────────────────────────</span>', isHtml: true },
  ];

  for (const p of projects) {
    lines.push({ type: 'blank', content: '' });
    lines.push({
      type: 'output',
      content: `  <span class="green">▸ ${escHtml(p.name)}</span>  <span class="dim">[${escHtml(p.tech)}]</span>`,
      isHtml: true,
    });
    lines.push({ type: 'output', content: `    ${p.desc}` });
    lines.push({
      type: 'output',
      content: `    <span class="dim">→ ${escHtml(p.url)}</span>`,
      isHtml: true,
    });
  }

  return lines;
}

function contactCmd(): CommandResult {
  return [
    { type: 'output', content: '<span class="section-title">Contact</span>', isHtml: true },
    { type: 'output', content: '<span class="dim">─────────────────────────────────────</span>', isHtml: true },
    { type: 'blank', content: '' },
    {
      type: 'output',
      content: `  <span class="dim">Email</span>     <a href="mailto:leo@example.com" class="link">leo@example.com</a>`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `  <span class="dim">GitHub</span>    <a href="https://github.com/leonardom011" target="_blank" class="link">github.com/leonardom011</a>`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `  <span class="dim">LinkedIn</span>  <a href="https://linkedin.com/in/leonardom011" target="_blank" class="link">linkedin.com/in/leonardom011</a>`,
      isHtml: true,
    },
    { type: 'blank', content: '' },
    {
      type: 'output',
      content: `  <span class="dim">I'm always open to interesting conversations. Say hi!</span>`,
      isHtml: true,
    },
  ];
}

function lsCmd(): CommandResult {
  return [
    {
      type: 'output',
      content: `<span class="green">about</span>  <span class="green">skills</span>  <span class="green">projects</span>  <span class="green">contact</span>`,
      isHtml: true,
    },
  ];
}

function neofetchCmd(): CommandResult {
  return [
    {
      type: 'output',
      content: `<span class="green">         .          </span>  <span class="green">visitor</span><span class="dim">@</span><span class="green">leonardom011</span>`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `<span class="green">        /|\\         </span>  <span class="dim">──────────────────</span>`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `<span class="green">       / | \\        </span>  <span class="dim">OS:</span>     Portfolio Linux`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `<span class="green">      /  |  \\       </span>  <span class="dim">Host:</span>   leonardom011.dev`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `<span class="green">     /   |   \\      </span>  <span class="dim">Shell:</span>  portfolio-sh 1.0.0`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `<span class="green">    /____|____\\     </span>  <span class="dim">Stack:</span>  Angular 21 + TS`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `<span class="green">                   </span>  <span class="dim">Theme:</span>  Gruvbox Dark`,
      isHtml: true,
    },
    {
      type: 'output',
      content: `<span class="green">                   </span>  <span class="yellow">██</span><span class="green">██</span><span class="dim">██</span><span class="link">██</span>`,
      isHtml: true,
    },
  ];
}

function escHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
