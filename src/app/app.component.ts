import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,filter,map, mergeMap } from 'rxjs';

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ParentColorComponent } from './parent-color/parent-color.component';
import { ThemeComponent } from './theme/theme.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
  viewProviders: [], //viewProviders is for using class.
  encapsulation: ViewEncapsulation.None,

  providers: [], //Making service component level ; //21-March-2023
})


export class AppComponent {

  title="Angular Tutorial";

  @ViewChild(ParentColorComponent) parentComp:ParentColorComponent;

  @ViewChild(ThemeComponent) themeComponent: ThemeComponent;

 
  changeCls(colo:string)
  {
    
    this.parentComp.changeColor(colo);
  }
 
  setTheme1() {
    this.themeComponent.setTheme();
  }

  
}




























