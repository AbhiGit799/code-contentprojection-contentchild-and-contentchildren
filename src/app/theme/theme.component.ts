import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  // @ViewChild('name') elName: ElementRef;
  // @ViewChild('age') elAge: ElementRef;


  // @ViewChildren('name') elName: QueryList<ElementRef>;
  // @ViewChildren('age') elAge: QueryList<ElementRef>;

  // @ContentChild('name') elName: ElementRef;
  // @ContentChild('age') elAge: ElementRef;


  @ContentChildren('name', { descendants: true }) elName: QueryList<ElementRef>;
  @ContentChildren('age', { descendants: true }) elAge: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {

  }

  setTheme() {
    // this.elName.nativeElement.style.backgroundColor = "black";
    // this.elName.nativeElement.style.color = "white";

    // this.elAge.nativeElement.style.backgroundColor = "cyan";
    // this.elAge.nativeElement.style.color = "red";


    // this.elName.first.nativeElement.style.backgroundColor = "black";
    // this.elName.first.nativeElement.style.color = "white";

    // this.elAge.first.nativeElement.style.backgroundColor = "cyan";
    // this.elAge.first.nativeElement.style.color = "red";


    // this.elName.last.nativeElement.style.backgroundColor = "black";
    // this.elName.last.nativeElement.style.color = "white";

    // this.elAge.last.nativeElement.style.backgroundColor = "cyan";
    // this.elAge.last.nativeElement.style.color = "red";


    // this.elName.forEach(el => el.nativeElement.style.backgroundColor = "black");
    // this.elName.forEach(el => el.nativeElement.style.color = "white");
    // this.elAge.forEach(el => el.nativeElement.style.backgroundColor = "cyan");
    // this.elAge.forEach(el => el.nativeElement.style.color = "red");



    this.elName.forEach(el => {
      el.nativeElement.style.backgroundColor = "black";
      el.nativeElement.style.color = "white";
    });

    this.elAge.forEach(el => {
      el.nativeElement.style.backgroundColor = "cyan";
      el.nativeElement.style.color = "red";
    });

  }
}

