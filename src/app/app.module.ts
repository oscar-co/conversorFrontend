import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConversorComponent } from './conversor/conversor.component';

import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormularioComponent } from './conversor/formulario/formulario.component';
import { CoversionPatronComponent } from './patrones/coversion-patron/coversion-patron.component';
import { FormularioPatronComponent } from './patrones/formularioPat/formulario-patron/formulario-patron.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversorComponent,
    FormularioComponent,
    CoversionPatronComponent,
    FormularioPatronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
