import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContatoComponent } from './contato/contato.component';
import { EnvioReceitaComponent } from './envio-receita/envio-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContatoComponent,
    EnvioReceitaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Adicione isto para resolver o erro
})
export class AppModule { }
