import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabuserComponent } from './tabuser.component';

describe('TabuserComponent', () => {
  let component: TabuserComponent;
  let fixture: ComponentFixture<TabuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabuserComponent]
    });
    fixture = TestBed.createComponent(TabuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
