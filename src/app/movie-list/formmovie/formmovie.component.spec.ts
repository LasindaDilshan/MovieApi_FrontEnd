import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmovieComponent } from './formmovie.component';

describe('FormmovieComponent', () => {
  let component: FormmovieComponent;
  let fixture: ComponentFixture<FormmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
