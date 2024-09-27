import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabtamanhosComponent } from './tabtamanhos.component';

describe('TabtamanhosComponent', () => {
  let component: TabtamanhosComponent;
  let fixture: ComponentFixture<TabtamanhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabtamanhosComponent]
    });
    fixture = TestBed.createComponent(TabtamanhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
