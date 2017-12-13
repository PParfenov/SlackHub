import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayThreadPostsComponent } from './display-thread-posts.component';

describe('DisplayThreadPostsComponent', () => {
  let component: DisplayThreadPostsComponent;
  let fixture: ComponentFixture<DisplayThreadPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayThreadPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayThreadPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
