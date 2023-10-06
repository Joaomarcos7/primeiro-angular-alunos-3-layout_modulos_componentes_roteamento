import { Component } from '@angular/core';
import {Fornecedor} from '../../shared/modelo/fornecedor';
import {Fornecedores} from '../../shared/modelo/FORNECEDORES';

@Component({
  selector: 'app-listagem-fornecedores',
  templateUrl: './listagem-fornecedores.component.html',
  styleUrls: ['./listagem-fornecedores.component.css']
})
export class ListagemFornecedoresComponent {

  fornecedores= Fornecedores;
  excluir(FornecedorARemover: Fornecedor): void {
    const indx = this.fornecedores.findIndex(fornecedores =>
      fornecedores._Cnpj === FornecedorARemover._Cnpj);

    this.fornecedores.splice(indx, 1);
  }

}