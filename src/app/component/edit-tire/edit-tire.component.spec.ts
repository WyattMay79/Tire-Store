import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTireComponent } from './edit-tire.component';

describe('EditTireComponent', () => {
  let component: EditTireComponent;
  let fixture: ComponentFixture<EditTireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTireComponent]
    });
    fixture = TestBed.createComponent(EditTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
