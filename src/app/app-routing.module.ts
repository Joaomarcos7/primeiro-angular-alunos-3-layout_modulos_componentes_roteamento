import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';
import {ListagemProdutosComponent} from "./produto/listagem-produtos/listagem-produtos"
import { MantemProdutoComponent } from './produto/mantem-produto/mantem-produto.component';
import { ListagemFornecedoresComponent } from './fornecedor/listagem-fornecedores/listagem-fornecedores';
import {MantemFornecedorComponent} from './fornecedor/mantem-fornecedores/mantem-fornecedor.component'

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'listagemprodutos',
    component: ListagemProdutosComponent
  },
  {
    path: 'editusuario/:id',
    component: MantemProdutoComponent
  },
  {
    path: "cadastroproduto",
    component: MantemProdutoComponent
  },
  {
    path:"listagemfornecedores",
    component:ListagemFornecedoresComponent
  },
  {
    path:"cadastrarfornecedor",
    component:MantemFornecedorComponent
  },
  {
    path:"editfornecedor/:cnpj",
    component: MantemFornecedorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
