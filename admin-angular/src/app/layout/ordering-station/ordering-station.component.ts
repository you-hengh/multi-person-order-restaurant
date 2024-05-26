import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ordering-station',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './ordering-station.component.html',
  styleUrl: './ordering-station.component.scss',
})
export class OrderingStationComponent {
  tableStatus = [
    {
      tableId: '44',
      tableStatus: '闲置中',
      orderId: '43',
      realOrderId: '18',
    },
    {
      tableId: '32',
      tableStatus: '使用中',
      orderId: '35',
      realOrderId: '67',
    },
    {
      tableId: '99',
      tableStatus: '闲置中',
      orderId: '47',
      realOrderId: '50',
    },
    {
      tableId: '98',
      tableStatus: '闲置中',
      orderId: '84',
      realOrderId: '13',
    },
    {
      tableId: '76',
      tableStatus: '使用中',
      orderId: '9',
      realOrderId: '26',
    },
    {
      tableId: '41',
      tableStatus: '闲置中',
      orderId: '54',
      realOrderId: '20',
    },
    {
      tableId: '74',
      tableStatus: '闲置中',
      orderId: '30',
      realOrderId: '78',
    },
    {
      tableId: '56',
      tableStatus: '闲置中',
      orderId: '86',
      realOrderId: '20',
    },
    {
      tableId: '100',
      tableStatus: '闲置中',
      orderId: '66',
      realOrderId: '62',
    },
    {
      tableId: '26',
      tableStatus: '闲置中',
      orderId: '2',
      realOrderId: '60',
    },
    {
      tableId: '92',
      tableStatus: '闲置中',
      orderId: '52',
      realOrderId: '79',
    },
  ];
}
