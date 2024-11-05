import { Component } from '@angular/core';

@Component({
   selector: 'app-lista-receitas',
   templateUrl: './lista-receitas.component.html',
   styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent {
   receitas = [
      { nome: 'Salada Vegana', ingredientes: 'Alface, tomate, cenoura', preparo: 'Misture tudo' },
      { nome: 'Hambúrguer de Grão de Bico', ingredientes: 'Grão de bico, cebola, alho', preparo: 'Processe e asse' },
      // Adicione mais receitas aqui
   ];
}
