import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationNewComponent } from './destination-new.component';

describe('DestinationNewComponent', () => {
  let component: DestinationNewComponent;
  let fixture: ComponentFixture<DestinationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationNewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
