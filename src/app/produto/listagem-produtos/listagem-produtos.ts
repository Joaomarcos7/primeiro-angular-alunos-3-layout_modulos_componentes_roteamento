import { Component } from '@angular/core';
import {Produto} from '../../shared/modelo/produto';
import {Produtos} from '../../shared/modelo/PRODUTOS';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent {

  produtos= Produtos;
  excluir(produtoARemover: Produto): void {
    const indx = this.produtos.findIndex(produtos =>
      produtos._id === produtoARemover._id);

    this.produtos.splice(indx, 1);
  }

}