import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRutaComponent } from './dialog-ruta.component';

describe('DialogRutaComponent', () => {
  let component: DialogRutaComponent;
  let fixture: ComponentFixture<DialogRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
