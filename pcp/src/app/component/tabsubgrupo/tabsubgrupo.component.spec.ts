import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsubgrupoComponent } from './tabsubgrupo.component';

describe('TabsubgrupoComponent', () => {
  let component: TabsubgrupoComponent;
  let fixture: ComponentFixture<TabsubgrupoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsubgrupoComponent]
    });
    fixture = TestBed.createComponent(TabsubgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
