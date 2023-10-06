import { Component } from '@angular/core';
import {Produto} from '../../shared/modelo/produto';
import {Produtos} from '../../shared/modelo/PRODUTOS';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mantem-produto',
  templateUrl: './mantem-produto.component.html',
  styleUrls: ['./mantem-produto.component.css']
})
export class MantemProdutoComponent {

  produtoDeManutencao: Produto;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  produtos=Produtos;
  
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.produtoDeManutencao = new Produto(0,"","");
    const idParaEdicao =    Number( this.rotaAtual.snapshot.paramMap.get('_id'));
    if (idParaEdicao) {
      // editando
      const usuarioEncontrado = this.produtos.find(
        produto => produto._id === idParaEdicao);
      if (usuarioEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.produtoDeManutencao = usuarioEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.produtoDeManutencao) {
      this.produtos.push(this.produtoDeManutencao);
    }
    this.produtoDeManutencao = new Produto();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemprodutos']);
  }

}
