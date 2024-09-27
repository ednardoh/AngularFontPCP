import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadtamanhosAddEditComponent } from './cadtamanhos-add-edit.component';

describe('CadtamanhosAddEditComponent', () => {
  let component: CadtamanhosAddEditComponent;
  let fixture: ComponentFixture<CadtamanhosAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadtamanhosAddEditComponent]
    });
    fixture = TestBed.createComponent(CadtamanhosAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
