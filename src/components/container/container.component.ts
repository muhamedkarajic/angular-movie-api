import { Component, Input } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html'
})
export class ContainerComponent {
  @Input() style: string = '';
  @Input() class: string = '';
}
