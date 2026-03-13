import { Component } from '@angular/core';
import { Terminal } from './terminal/terminal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Terminal],
  template: '<app-terminal />',
  styles: [':host { display: block; width: 100%; height: 100dvh; }'],
})
export class App {}