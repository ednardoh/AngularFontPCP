import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadgrupoAddEditComponent } from './cadgrupo-add-edit.component';

describe('CadgrupoAddEditComponent', () => {
  let component: CadgrupoAddEditComponent;
  let fixture: ComponentFixture<CadgrupoAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadgrupoAddEditComponent]
    });
    fixture = TestBed.createComponent(CadgrupoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
