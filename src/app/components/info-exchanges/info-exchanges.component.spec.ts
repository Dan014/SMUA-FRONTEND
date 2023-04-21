import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoExchangesComponent } from './info-exchanges.component';

describe('InfoExchangesComponent', () => {
  let component: InfoExchangesComponent;
  let fixture: ComponentFixture<InfoExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoExchangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
