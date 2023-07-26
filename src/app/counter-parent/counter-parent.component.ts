import { Component, ContentChild, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent {

 // @ViewChildren(CounterComponent) childMultiCounter: QueryList<CounterComponent>;

// @ContentChild(CounterComponent) childMultiCounter: CounterComponent;

 @ContentChildren(CounterComponent) childMultiCounter: QueryList<CounterComponent>;

  constructor()
  {
     
  }

  ngOnInit()
  {

    
    
  }

  ngAfterViewInit()
  {
    
  }



  increment()
  {

    // this.childMultiCounter.incrementByOne();  //Content Child
   
   //  this.childMultiCounter.first.incrementByOne();  
   
    // this.childMultiCounter.last.incrementByOne();

    this.childMultiCounter.forEach(el=>el.incrementByOne());

   //this.childMultiCounter.find(el=>el.name==="Sohan").incrementByOne();

   //this.childMultiCounter.filter(el=>el.name==="Arjun").forEach(e=>e.incrementByOne());

   //console.log(`Map example = ${this.childMultiCounter.map(el=>el.name)}`);
   

  }



  decrement()
  {

   // this.childMultiCounter.decrementByOne();  //ContentChild

    // this.childMultiCounter.first.decrementByOne();  

    // this.childMultiCounter.last.decrementByOne();

     this.childMultiCounter.forEach(el=>el.decrementByOne());

    // this.childMultiCounter.find(el=>el.name==="Sohan").decrementByOne();

   // this.childMultiCounter.filter(el=>el.name==="Arjun").forEach(e=>e.decrementByOne());

  }

  
}

