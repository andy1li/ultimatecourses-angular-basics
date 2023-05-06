import { Component, OnInit } from '@angular/core'
import type { Donut } from '../../models/donut.model'

@Component({
  selector: 'donut-list',
  template: `
    <ul>
      <donut-card [donut]="donuts[0]" />
      <donut-card [donut]="donuts[1]" />
      <donut-card [donut]="donuts[2]" />
    </ul>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[]

  ngOnInit(): void {
    this.donuts = [
      {
        id: 1,
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic.',
      },
      {
        id: 2,
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection.',
      },
      {
        id: 3,
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.',
      },
    ]
  }
}
