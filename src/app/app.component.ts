import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListComponent} from './list/list.component';
import {NgForOf} from '@angular/common';
import {MyListComponent} from './my-list/my-list.component';
import {MyTemplateDirective} from './my-template.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, NgForOf, MyListComponent, MyTemplateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v18-template-access';
  items = ['One', 'Two', 'Three'];
}
