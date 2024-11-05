import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { DicasComponent } from './dicas/dicas.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { EnvioReceitaComponent } from './envio-receita/envio-receita.component';
import { ListaReceitasComponent } from './lista-receitas/lista-receitas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'receitas', component: ReceitasComponent },
    { path: 'dicas', component: DicasComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'envio-receita', component: EnvioReceitaComponent },
    { path: 'receitas', component: ListaReceitasComponent }
 ];
 
