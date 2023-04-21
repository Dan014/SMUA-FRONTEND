import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUbicationComponent } from './add-ubication.component';

describe('AddProductComponent', () => {
  let component: AddUbicationComponent;
  let fixture: ComponentFixture<AddUbicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUbicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUbicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
