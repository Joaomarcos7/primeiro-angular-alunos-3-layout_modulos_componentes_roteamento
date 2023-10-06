import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFornecedoresComponent } from './listagem-fornecedores';

describe('ListagemFornecedoressComponent', () => {
  let component: ListagemFornecedoresComponent;
  let fixture: ComponentFixture<ListagemFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemFornecedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
