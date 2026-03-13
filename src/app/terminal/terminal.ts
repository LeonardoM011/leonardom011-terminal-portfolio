import { Component, ElementRef, OnInit, ViewChild, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { runCommand, langInfoCmd, langSetCmd, langErrorCmd } from './commands';
import { Lang, TRANSLATIONS } from './i18n';

export interface TerminalLine {
  type: 'banner' | 'input' | 'output' | 'error' | 'blank';
  content: string;
  isHtml?: boolean;
  prompt?: string;
  clickCommand?: string;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.css',
})
export class Terminal implements OnInit {
  @ViewChild('inputEl') inputEl!: ElementRef<HTMLInputElement>;
  @ViewChild('scrollEl') scrollEl!: ElementRef<HTMLDivElement>;

  lines = signal<TerminalLine[]>([]);
  currentInput = signal('');
  history = signal<string[]>([]);
  historyIndex = signal(-1);
  lang = signal<Lang>('hr');

  readonly PROMPT_USER: Record<Lang, string> = { en: 'user', hr: 'korisnik' };
  prompt = computed(() => `${this.PROMPT_USER[this.lang()]}@leonardom011:~$`);

  ngOnInit() {
    this.lines.set([
      ...BANNER_LINES,
      { type: 'blank', content: '' },
      ...runCommand('help', this.lang()),
      { type: 'blank', content: '' },
    ]);
  }

  onKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.submit();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.navigateHistory(1);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.navigateHistory(-1);
    } else if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      this.clear();
    } else if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault();
      this.appendLine({ type: 'input', content: this.currentInput(), prompt: this.prompt() });
      this.appendLine({ type: 'output', content: '^C' });
      this.appendLine({ type: 'blank', content: '' });
      this.currentInput.set('');
      this.historyIndex.set(-1);
    }
  }

  runClick(cmd: string) {
    this.currentInput.set(cmd);
    this.submit();
  }

  private submit() {
    const cmd = this.currentInput().trim();
    this.appendLine({ type: 'input', content: cmd, prompt: this.prompt() });

    if (cmd) {
      this.history.update(h => [cmd, ...h].slice(0, 50));
      this.historyIndex.set(-1);

      if (cmd === 'clear') {
        this.clear();
        this.currentInput.set('');
        return;
      }

      const result = this.handleLang(cmd) ?? runCommand(cmd, this.lang());
      for (const line of result) {
        this.appendLine(line);
      }
      this.appendLine({ type: 'blank', content: '' });
    } else {
      this.appendLine({ type: 'blank', content: '' });
    }

    this.currentInput.set('');
    this.scrollToBottom();
  }

  private handleLang(cmd: string): TerminalLine[] | null {
    const parts = cmd.trim().split(/\s+/);
    if (parts[0].toLowerCase() !== 'lang') return null;

    const arg = parts[1]?.toLowerCase() as Lang | undefined;

    if (!arg) {
      return langInfoCmd(this.lang());
    }
    if (arg !== 'en' && arg !== 'hr') {
      return langErrorCmd(TRANSLATIONS[this.lang()]);
    }

    const result = langSetCmd(arg, TRANSLATIONS[this.lang()]);
    this.lang.set(arg);
    return result;
  }

  private navigateHistory(dir: number) {
    const h = this.history();
    let idx = this.historyIndex() + dir;
    idx = Math.max(-1, Math.min(h.length - 1, idx));
    this.historyIndex.set(idx);
    this.currentInput.set(idx === -1 ? '' : h[idx]);
  }

  private clear() {
    this.lines.set([]);
  }

  private appendLine(line: TerminalLine) {
    this.lines.update(l => [...l, line]);
  }

  private scrollToBottom() {
    setTimeout(() => {
      const el = this.scrollEl?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    }, 0);
  }

  focusInput() {
    this.inputEl?.nativeElement.focus();
  }
}

const BANNER_LINES: TerminalLine[] = [
  { type: 'banner', content: `<span class="green"> _                                _ </span>`, isHtml: true },
  { type: 'banner', content: `<span class="green">| | ___  ___  _ __   __ _ _ __ __| | ___  </span>`, isHtml: true },
  { type: 'banner', content: `<span class="green">| |/ _ \\/ _ \\| '_ \\ / _\` | '__/ _\` |/ _ \\ </span>`, isHtml: true },
  { type: 'banner', content: `<span class="green">| |  __/ (_) | | | | (_| | | | (_| | (_) |</span>`, isHtml: true },
  { type: 'banner', content: `<span class="green">|_|\\___|\\___/|_| |_|\\__,_|_|  \\__,_|\\___/ </span>`, isHtml: true },
  { type: 'blank', content: '' },
  { type: 'output', content: '<span class="dim">Portfolio v1.0.0 — Full-Stack Developer</span>', isHtml: true },
  { type: 'output', content: '<span class="dim">────────────────────────────────────────────</span>', isHtml: true },
  { type: 'output', content: '<img class="profile-pic" src="profile-pic.jpg" alt="Profile" />', isHtml: true },
];
