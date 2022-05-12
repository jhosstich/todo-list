import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DutiesModule } from 'src/app/duties/duties.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DutiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
