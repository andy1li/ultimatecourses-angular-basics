import { Component, Input } from '@angular/core'
import type { Donut } from '../../models/donut.model'

@Component({
  selector: 'donut-card',
  template: `
    <div class="donut-card">
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        class="donut-card-icon"
        [alt]="donut.name"
      />
      <div>
        <p class="donut-card-name">{{ donut.name }}</p>
        <p class="donut-card-price">{{ donut.price }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 4px;
        margin-bottom: 4px;
        padding: 4px 12px;
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: translateY(-4px);
        }

        &-price {
          font-size: 14px;
          color: #c14583;
        }

        &-icon {
          width: 52px;
          margin-right: 12px;
        }
      }
    `,
  ],
})
export class DonutCardComponent {
  @Input() donut!: Donut
}
