import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadcolecaoAddEditComponent } from './cadcolecao-add-edit.component';

describe('CadcolecaoAddEditComponent', () => {
  let component: CadcolecaoAddEditComponent;
  let fixture: ComponentFixture<CadcolecaoAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadcolecaoAddEditComponent]
    });
    fixture = TestBed.createComponent(CadcolecaoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
