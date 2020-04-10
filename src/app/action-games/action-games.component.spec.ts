import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGamesComponent } from './action-games.component';

describe('ActionGamesComponent', () => {
  let component: ActionGamesComponent;
  let fixture: ComponentFixture<ActionGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
