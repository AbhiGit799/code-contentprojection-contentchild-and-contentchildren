import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangebgcolor]'
})
export class ChangebgcolorDirective {

  constructor(private elRef:ElementRef) { }

  ngOnInit()
  {
    this.elRef.nativeElement.style.color="red";
    this.elRef.nativeElement.style.fontSize="40px";
    
  }

  changecol(co:string)
  {
    this.elRef.nativeElement.style.color=co;
  }


}