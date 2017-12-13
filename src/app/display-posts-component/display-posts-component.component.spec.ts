import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPostsComponentComponent } from './display-posts-component.component';

describe('DisplayPostsComponentComponent', () => {
  let component: DisplayPostsComponentComponent;
  let fixture: ComponentFixture<DisplayPostsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPostsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
