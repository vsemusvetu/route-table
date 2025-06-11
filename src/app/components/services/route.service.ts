import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Route } from '../models/route.model';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private routes: Route[] = [
    {
      uuid: '1',
      address: '192.168.1.0',
      mask: '24',
      gateway: '192.168.1.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '2',
      address: '10.0.0.0',
      mask: '8',
      gateway: '10.0.0.1',
      interface: 'Гостевая сеть',
    },
    {
      uuid: '3',
      address: '172.16.0.0',
      mask: '16',
      gateway: '172.16.0.1',
      interface: 'Домашняя сеть',
    },
    {
      uuid: '4',
      address: '192.168.2.0',
      mask: '24',
      gateway: '192.168.2.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '5',
      address: '10.1.0.0',
      mask: '16',
      gateway: '10.1.0.1',
      interface: 'Гостевая сеть',
    },
    {
      uuid: '6',
      address: '172.17.0.0',
      mask: '16',
      gateway: '172.17.0.1',
      interface: 'Домашняя сеть',
    },
    {
      uuid: '7',
      address: '192.168.3.0',
      mask: '24',
      gateway: '192.168.3.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '8',
      address: '10.2.0.0',
      mask: '16',
      gateway: '10.2.0.1',
      interface: 'Гостевая сеть',
    },
  ];

  getRoutes(): Observable<Route[]> {
    return of(this.routes);
  }
}
