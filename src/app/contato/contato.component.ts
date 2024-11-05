import { Component } from '@angular/core';

@Component({
   selector: 'app-contato',
   templateUrl: './contato.component.html',
   styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
   contato = {
      nome: '',
      email: '',
      mensagem: ''
   };

   enviarContato() {
      console.log('Dados do contato:', this.contato);
      // Lógica para envio, como uma API, pode ser adicionada posteriormente
      alert('Mensagem enviada com sucesso!');
   }
}
