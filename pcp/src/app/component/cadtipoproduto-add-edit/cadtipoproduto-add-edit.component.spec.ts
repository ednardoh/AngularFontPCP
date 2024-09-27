import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadtipoprodutoAddEditComponent } from './cadtipoproduto-add-edit.component';

describe('CadtipoprodutoAddEditComponent', () => {
  let component: CadtipoprodutoAddEditComponent;
  let fixture: ComponentFixture<CadtipoprodutoAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadtipoprodutoAddEditComponent]
    });
    fixture = TestBed.createComponent(CadtipoprodutoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
