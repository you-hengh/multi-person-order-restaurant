import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OrderingStationComponent } from './layout/ordering-station/ordering-station.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'ordering-station',
        component: OrderingStationComponent,
      },
    ],
  },
];
