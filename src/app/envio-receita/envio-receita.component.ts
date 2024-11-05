import { Component } from '@angular/core';

@Component({
   selector: 'app-envio-receita',
   templateUrl: './envio-receita.component.html',
   styleUrls: ['./envio-receita.component.css']
})
export class EnvioReceitaComponent {
   receita = {
      nome: '',
      ingredientes: '',
      preparo: ''
   };

   enviarReceita() {
      console.log('Receita enviada:', this.receita);
      alert('Receita enviada com sucesso!');
      // Lógica para enviar os dados para um servidor pode ser adicionada aqui
   }
}
