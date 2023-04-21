import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogGenericComponent } from './dilog-generic.component';

describe('DilogGenericComponent', () => {
  let component: DilogGenericComponent;
  let fixture: ComponentFixture<DilogGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilogGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DilogGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
