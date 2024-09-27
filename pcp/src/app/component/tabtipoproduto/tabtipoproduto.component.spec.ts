import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabtipoprodutoComponent } from './tabtipoproduto.component';

describe('TabtipoprodutoComponent', () => {
  let component: TabtipoprodutoComponent;
  let fixture: ComponentFixture<TabtipoprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabtipoprodutoComponent]
    });
    fixture = TestBed.createComponent(TabtipoprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
