import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'donut-list',
  template: `
    <ul>
      <li>{{ donut.name }} {{ donut.price }}</li>
    </ul>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: any[]
  donut: any

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

    this.donut = this.donuts[0]
  }
}
