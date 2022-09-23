import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervelComponent } from './intervel.component';

describe('IntervelComponent', () => {
  let component: IntervelComponent;
  let fixture: ComponentFixture<IntervelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
