import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCardComponent } from './sidebar-card.component';

describe('CardComponent', () => {
  let component: SidebarCardComponent;
  let fixture: ComponentFixture<SidebarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
