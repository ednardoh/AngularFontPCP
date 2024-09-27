import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabgrupoComponent } from './tabgrupo.component';

describe('CadgrupoComponent', () => {
  let component: TabgrupoComponent;
  let fixture: ComponentFixture<TabgrupoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabgrupoComponent]
    });
    fixture = TestBed.createComponent(TabgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
