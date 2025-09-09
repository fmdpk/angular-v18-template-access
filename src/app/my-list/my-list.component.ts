import { AfterContentInit, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyTemplateDirective} from '../my-template.directive';

@Component({
  selector: 'my-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <!-- Empty item (valid: only one * on each element) -->
      <li>
        <ng-container *ngIf="has('empty'); else trulyEmpty">
          <ng-container *ngTemplateOutlet="t('empty')"></ng-container>
        </ng-container>
        <ng-template #trulyEmpty>empty</ng-template>
      </li>

      <!-- Items -->
      <li *ngFor="let item of items; let i = index">
        <ng-container *ngIf="has('item'); else defaultItem">
          <ng-container
            *ngTemplateOutlet="t('item'); context: {$implicit: item, index: i}">
          </ng-container>
        </ng-container>
        <ng-template #defaultItem>{{ item }}</ng-template>
      </li>

      <!-- Footer (optional) -->
      <ng-container *ngIf="has('footer'); else defaultFooter">
        <ng-container *ngTemplateOutlet="t('footer')"></ng-container>
      </ng-container>
      <ng-template #defaultFooter>footer</ng-template>
    </ul>
  `
})
export class MyListComponent implements AfterContentInit {
  @Input() items: any[] = [];

  @ContentChildren(MyTemplateDirective) templates!: QueryList<MyTemplateDirective>;

  private slotMap = new Map<string, TemplateRef<any>>();

  ngAfterContentInit() {
    this.rebuildSlots();
    // If parent adds/removes templates dynamically
    this.templates.changes.subscribe(() => this.rebuildSlots());
  }

  private rebuildSlots() {
    this.slotMap.clear();
    this.templates.forEach(t => this.slotMap.set(t.name, t.template));
    // Debug: uncomment to verify slots found
    // console.log('slots:', Array.from(this.slotMap.keys()));
  }

  has(name: string) { return this.slotMap.has(name); }
  t(name: string) { return this.slotMap.get(name) ?? null; }
}
