import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadsubgrupoAddEditComponent } from './cadsubgrupo-add-edit.component';

describe('CadsubgrupoAddEditComponent', () => {
  let component: CadsubgrupoAddEditComponent;
  let fixture: ComponentFixture<CadsubgrupoAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadsubgrupoAddEditComponent]
    });
    fixture = TestBed.createComponent(CadsubgrupoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
