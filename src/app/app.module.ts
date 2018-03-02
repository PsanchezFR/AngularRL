import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuTemplateComponent } from './menu-template/menu-template.component';
import { ButtonTemplateComponent } from './button-template/button-template.component';
import { DataFieldTemplateComponent } from './data-field-template/data-field-template.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuTemplateComponent,
    ButtonTemplateComponent,
    DataFieldTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
