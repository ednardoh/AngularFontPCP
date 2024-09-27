import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaodetailComponent } from './colecaodetail.component';

describe('ColecaodetailComponent', () => {
  let component: ColecaodetailComponent;
  let fixture: ComponentFixture<ColecaodetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColecaodetailComponent]
    });
    fixture = TestBed.createComponent(ColecaodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
