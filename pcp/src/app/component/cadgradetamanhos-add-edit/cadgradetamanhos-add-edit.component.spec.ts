import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadgradetamanhosAddEditComponent } from './cadgradetamanhos-add-edit.component';

describe('CadgradetamanhosAddEditComponent', () => {
  let component: CadgradetamanhosAddEditComponent;
  let fixture: ComponentFixture<CadgradetamanhosAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadgradetamanhosAddEditComponent]
    });
    fixture = TestBed.createComponent(CadgradetamanhosAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
