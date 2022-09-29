import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranquiasComponent } from './franquias.component';

describe('FranquiasComponent', () => {
  let component: FranquiasComponent;
  let fixture: ComponentFixture<FranquiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranquiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
