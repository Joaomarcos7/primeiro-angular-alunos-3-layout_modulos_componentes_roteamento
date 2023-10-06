import { Component } from '@angular/core';
import {Fornecedor} from '../../shared/modelo/fornecedor';
import {Fornecedores} from '../../shared/modelo/FORNECEDORES';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mantem-fornecedor',
  templateUrl: './mantem-fornecedor.component.html',
  styleUrls: ['./mantem-fornecedor.component.css']
})
export class MantemFornecedorComponent {

  fornecedorDeManutencao: Fornecedor;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  fornecedores=Fornecedores;
  
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.fornecedorDeManutencao = new Fornecedor("","");
    const idParaEdicao =    this.rotaAtual.snapshot.paramMap.get('_Cnpj');
    if (idParaEdicao) {
      // editando
      const fornecedorEncontrado = this.fornecedores.find(
        fornecedor => fornecedor._Cnpj === idParaEdicao);
      if (fornecedorEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.fornecedorDeManutencao = fornecedorEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.fornecedorDeManutencao) {
      this.fornecedores.push(this.fornecedorDeManutencao);
    }
    this.fornecedorDeManutencao = new Fornecedor();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemfornecedores']);
  }

}
