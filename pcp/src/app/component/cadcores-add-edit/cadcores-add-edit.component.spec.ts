import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadcoresAddEditComponent } from './cadcores-add-edit.component';

describe('CadcoresAddEditComponent', () => {
  let component: CadcoresAddEditComponent;
  let fixture: ComponentFixture<CadcoresAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadcoresAddEditComponent]
    });
    fixture = TestBed.createComponent(CadcoresAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
