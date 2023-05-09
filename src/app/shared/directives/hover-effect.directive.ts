import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  @Input() hoverColor = 'grey';

  @HostBinding('id') id:any;

  @HostListener('mouseenter') 
  mouseEnter() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseleave') 
  mouseLeave() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = '';
  }

  constructor(private element: ElementRef) { }

  ngOnInit() {
    // console.log(this.id);
  }
}
