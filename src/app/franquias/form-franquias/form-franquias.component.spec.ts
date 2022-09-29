import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFranquiasComponent } from './form-franquias.component';

describe('FormFranquiasComponent', () => {
  let component: FormFranquiasComponent;
  let fixture: ComponentFixture<FormFranquiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFranquiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFranquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
