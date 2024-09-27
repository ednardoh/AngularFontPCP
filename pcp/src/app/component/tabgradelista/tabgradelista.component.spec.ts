import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabgradelistaComponent } from './tabgradelista.component';

describe('TabgradelistaComponent', () => {
  let component: TabgradelistaComponent;
  let fixture: ComponentFixture<TabgradelistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabgradelistaComponent]
    });
    fixture = TestBed.createComponent(TabgradelistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
