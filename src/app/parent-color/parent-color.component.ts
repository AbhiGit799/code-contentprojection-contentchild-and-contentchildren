import { Component, ContentChild, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { ChangebgcolorDirective } from '../changebgcolor.directive';

@Component({
  selector: 'app-parent-color',
  templateUrl: './parent-color.component.html',
  styleUrls: ['./parent-color.component.css']
})
export class ParentColorComponent {

  // here red color is coming from directive.

  @ContentChild(ChangebgcolorDirective) chagebgcolorDirective: ChangebgcolorDirective;

 @ContentChildren(ChangebgcolorDirective, { descendants: true }) chagebgcolorDirective1:  QueryList<ChangebgcolorDirective>;

 //we get error because we use <b>  </b> in app.component.html file

 // @ContentChildren(ChangebgcolorDirective) chagebgcolorDirective1:  QueryList<ChangebgcolorDirective>;


  constructor() { }

  ngOnInit(): void {
  }

  changeColor(cc: string) {

   //  this.chagebgcolorDirective.changecol(cc);

   // this.chagebgcolorDirective.first.changecol(cc);
    // this.chagebgcolorDirective.last.changecol(cc);

  this.chagebgcolorDirective1.forEach(el => el.changecol(cc));

  }
 

}



