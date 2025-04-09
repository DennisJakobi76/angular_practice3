import {
  Component,
  HostBinding,
  HostListener,
  input,
  inject,
  ViewEncapsulation,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // Alternative
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){
  //   console.log('Clicked!');}
  label = input.required<string>();
  private el = inject(ElementRef);
  onClick() {
    console.log('Clicked!');
    console.log(this.el);
  }
}
