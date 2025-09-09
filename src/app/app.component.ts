import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListComponent} from './list/list.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v18-template-access';
  items = ['One', 'Two', 'Three'];
}
