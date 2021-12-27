import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloListaComponent } from './components/articulo-lista/articulo-lista.component';
import { ArticuloFormComponent } from './components/articulo-form/articulo-form.component';
import { MaterialExampleModule } from './material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ArticuloListaComponent, ArticuloFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialExampleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
