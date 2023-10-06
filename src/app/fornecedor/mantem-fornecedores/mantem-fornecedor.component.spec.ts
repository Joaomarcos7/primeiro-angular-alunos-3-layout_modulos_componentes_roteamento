import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemProdutoComponent } from './mantem-fornecedor.component';

describe('MantemUProdutoComponent', () => {
  let component: MantemProdutoComponent;
  let fixture: ComponentFixture<MantemProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
