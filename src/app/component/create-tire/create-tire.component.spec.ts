import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTireComponent } from './create-tire.component';

describe('CreateTireComponent', () => {
  let component: CreateTireComponent;
  let fixture: ComponentFixture<CreateTireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTireComponent]
    });
    fixture = TestBed.createComponent(CreateTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
