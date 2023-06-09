import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { DonutListComponent } from './admin/containers/donut-list/donut-list.component'

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <header class="header">
        <img src="/assets/img/logo.svg" alt="Ultimate Donuts" class="logo" />
      </header>
      <donut-list />
    </div>
  `,
  styles: [
    `
      .app {
        background: white;
        border-radius: 8px;
        max-width: 400px;
        width: 94%;
        margin: 24px auto;
        padding: 24px;
        border: 4px solid #ef9fc7;
      }
      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 24px;
      }
      .logo {
        width: 100px;
        height: 88px;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, RouterOutlet, DonutListComponent],
})
export class AppComponent {}
