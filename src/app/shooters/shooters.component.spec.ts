import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootersComponent } from './shooters.component';

describe('ShootersComponent', () => {
  let component: ShootersComponent;
  let fixture: ComponentFixture<ShootersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
