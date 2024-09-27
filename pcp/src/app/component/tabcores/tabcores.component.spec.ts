import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabcoresComponent } from './tabcores.component';

describe('TabcoresComponent', () => {
  let component: TabcoresComponent;
  let fixture: ComponentFixture<TabcoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabcoresComponent]
    });
    fixture = TestBed.createComponent(TabcoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
