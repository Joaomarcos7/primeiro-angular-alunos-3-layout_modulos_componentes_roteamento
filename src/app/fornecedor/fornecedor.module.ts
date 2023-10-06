import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemFornecedoresComponent } from './listagem-fornecedores/listagem-fornecedores';
import { MantemFornecedorComponent } from './mantem-fornecedores/mantem-fornecedor.component'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {PipesModule} from '../pipes/pipes.module';
import {FlexModule} from '@angular/flex-layout';
import {RouterLink} from '@angular/router';
import { ListagemUsuariosComponent } from '../usuario/listagem-usuarios/listagem-usuarios.component';
import { MantemUsuarioComponent } from '../usuario/mantem-usuario/mantem-usuario.component';



@NgModule({
  declarations: [
    ListagemFornecedoresComponent,
    MantemFornecedorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
    FlexModule,
    RouterLink
  ],
  exports: [
    ListagemFornecedoresComponent,
    MantemFornecedorComponent
  ]
})
export class FornecedorModule { }
