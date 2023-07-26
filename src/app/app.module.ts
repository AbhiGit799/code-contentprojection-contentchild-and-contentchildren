import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { ParentColorComponent } from './parent-color/parent-color.component';
import { ChangebgcolorDirective } from './changebgcolor.directive';
import { ThemeComponent } from './theme/theme.component';




@NgModule({
  declarations: [AppComponent, CounterComponent, CounterParentComponent, ParentColorComponent, ChangebgcolorDirective, ThemeComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  //  HttpClientInMemoryWebApiModule.forRoot(Testdata),

  ],
  providers:[], //example for showing nesting service example.
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    
  }
}
