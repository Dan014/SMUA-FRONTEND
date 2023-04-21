import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProductFormComponent } from './ver-product-form.component';

describe('VerProductFormComponent', () => {
  let component: VerProductFormComponent;
  let fixture: ComponentFixture<VerProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerProductFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
