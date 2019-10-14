import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[currencyDecimal]'
})

export class CurrencyDecimalDirective {

  private regex = new RegExp(/^[0-9]+(\.[0-9]{0,4}){0,1}$/g);

  private specialKeys = [ 'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight' ];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', [ '$event' ])
  onKeyDown(event: KeyboardEvent) {

    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
