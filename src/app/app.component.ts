import { Component, OnInit } from '@angular/core';
import { RouteTableComponent } from './components/route-table/route-table.component';
import { CommonModule } from '@angular/common';
import { Route } from './components/models/route.model';
import { RouteService } from './components/services/route.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouteTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routes: Route[] = [];

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.routeService.getRoutes().subscribe(routes => {
      this.routes = routes;
    });
  }
}