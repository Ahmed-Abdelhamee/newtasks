import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductdetailsLinkComponent } from './prouductdetails-link.component';

describe('ProuductdetailsLinkComponent', () => {
  let component: ProuductdetailsLinkComponent;
  let fixture: ComponentFixture<ProuductdetailsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductdetailsLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuductdetailsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
