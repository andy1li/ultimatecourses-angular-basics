import { Component, Input } from '@angular/core'
import type { Donut } from '../../models/donut.model'

@Component({
  selector: 'donut-card',
  template: `
    <li class="donut-card">
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        class="donut-card-icon"
        [alt]="donut.name"
      />
      <div>
        <p class="donut-card-name">{{ donut.name }}</p>
        <p class="donut-card-price">{{ donut.price }}</p>
      </div>
    </li>
  `,
  styles: [],
})
export class DonutCardComponent {
  @Input() donut!: Donut
}
