import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[myTemplate]', // use like <ng-template myTemplate="item">
  standalone: true
})
export class MyTemplateDirective {

  @Input('myTemplate') name: string = '';
  constructor(public template: TemplateRef<any>) {}

}
