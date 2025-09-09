import {Component, ContentChild, TemplateRef} from '@angular/core';
import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgIf,
    NgForOf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @ContentChild('itemTemplate') itemTemplate!: TemplateRef<any>;
  @ContentChild('itemTemplateSecond') itemTemplateSecond!: TemplateRef<any>;
  @ContentChild('footerTemplate') footerTemplate!: TemplateRef<any>;

  items = ['One', 'Two', 'Three'];
}
