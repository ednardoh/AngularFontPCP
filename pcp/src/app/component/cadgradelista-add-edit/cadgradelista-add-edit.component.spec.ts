import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadgradelistaAddEditComponent } from './cadgradelista-add-edit.component';

describe('CadgradelistaAddEditComponent', () => {
  let component: CadgradelistaAddEditComponent;
  let fixture: ComponentFixture<CadgradelistaAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadgradelistaAddEditComponent]
    });
    fixture = TestBed.createComponent(CadgradelistaAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
