import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabdepartamentoComponent } from './tabdepartamento.component';

describe('TabdepartamentoComponent', () => {
  let component: TabdepartamentoComponent;
  let fixture: ComponentFixture<TabdepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabdepartamentoComponent]
    });
    fixture = TestBed.createComponent(TabdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
