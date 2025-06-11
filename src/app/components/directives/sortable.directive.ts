import { Directive, EventEmitter, Input, Output } from '@angular/core';

export type SortDirection = 'asc' | 'desc' | '';
export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'onClick()'
  }
})
export class SortableDirective {
  @Input() sortable: string = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  onClick() {
    this.rotate();
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }

  private rotate() {
    switch (this.direction) {
      case 'asc':
        this.direction = 'desc';
        break;
      case 'desc':
        this.direction = '';
        break;
      default:
        this.direction = 'asc';
    }
  }
}