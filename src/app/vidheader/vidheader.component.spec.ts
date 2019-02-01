import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidheaderComponent } from './vidheader.component';

describe('VidheaderComponent', () => {
  let component: VidheaderComponent;
  let fixture: ComponentFixture<VidheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
