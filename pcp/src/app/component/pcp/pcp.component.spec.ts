import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpComponent } from './pcp.component';

describe('PcpComponent', () => {
  let component: PcpComponent;
  let fixture: ComponentFixture<PcpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcpComponent]
    });
    fixture = TestBed.createComponent(PcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
