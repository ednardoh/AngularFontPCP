import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabcolecaoComponent } from './tabcolecao.component';

describe('TabcolecaoComponent', () => {
  let component: TabcolecaoComponent;
  let fixture: ComponentFixture<TabcolecaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabcolecaoComponent]
    });
    fixture = TestBed.createComponent(TabcolecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
