import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

import { compare } from "../../utils/compare";
import {  SortableDirective, SortEvent } from "../directives/sortable.directive";
import { Route } from "../models/route.model";


@Component({
  selector: 'app-route-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-table.component.html',
  styleUrls: ['./route-table.component.scss']
})
export class RouteTableComponent {
  @Input() routes: Route[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' | '' = '';

  toggleDirection(column: string): 'asc' | 'desc' {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }
    this.sortColumn = column;
    return this.sortDirection;
  }

  onSort({ column, direction }: SortEvent) {
    if (direction === '') return;

    this.routes = [...this.routes].sort((a, b) => {
      const isAsc = direction === 'asc';
      switch (column) {
        case 'address': return compare(a.address, b.address, isAsc);
        case 'gateway': return compare(a.gateway, b.gateway, isAsc);
        case 'interface': return compare(a.interface, b.interface, isAsc);
        case 'mask': return compare(a.mask, b.mask, isAsc);
        default: return 0;
      }
    });
  }
}