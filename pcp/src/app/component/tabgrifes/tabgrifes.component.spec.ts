import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabgrifesComponent } from './tabgrifes.component';

describe('TabgrifesComponent', () => {
  let component: TabgrifesComponent;
  let fixture: ComponentFixture<TabgrifesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabgrifesComponent]
    });
    fixture = TestBed.createComponent(TabgrifesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
