import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { FordirectiveComponent } from './directive/fordirective/fordirective.component';
import { NumbersortPipe } from './custompipe/numbersort.pipe';
import { StringsortPipe } from './custompipe/stringsort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent,
    DaughterComponent,
    FordirectiveComponent,
    NumbersortPipe,
    StringsortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
