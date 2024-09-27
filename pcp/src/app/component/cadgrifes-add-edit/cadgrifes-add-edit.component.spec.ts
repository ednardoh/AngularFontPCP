import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadgrifesAddEditComponent } from './cadgrifes-add-edit.component';

describe('CadgrifesAddEditComponent', () => {
  let component: CadgrifesAddEditComponent;
  let fixture: ComponentFixture<CadgrifesAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadgrifesAddEditComponent]
    });
    fixture = TestBed.createComponent(CadgrifesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
