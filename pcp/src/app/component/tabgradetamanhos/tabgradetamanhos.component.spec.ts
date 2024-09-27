import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabgradetamanhosComponent } from './tabgradetamanhos.component';

describe('TabgradetamanhosComponent', () => {
  let component: TabgradetamanhosComponent;
  let fixture: ComponentFixture<TabgradetamanhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabgradetamanhosComponent]
    });
    fixture = TestBed.createComponent(TabgradetamanhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
