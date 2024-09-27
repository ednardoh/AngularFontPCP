import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaddepartamentoAddEditComponent } from './caddepartamento-add-edit.component';

describe('CaddepartamentoAddEditComponent', () => {
  let component: CaddepartamentoAddEditComponent;
  let fixture: ComponentFixture<CaddepartamentoAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaddepartamentoAddEditComponent]
    });
    fixture = TestBed.createComponent(CaddepartamentoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
