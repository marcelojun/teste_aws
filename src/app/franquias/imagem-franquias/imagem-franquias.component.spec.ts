import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemFranquiasComponent } from './imagem-franquias.component';

describe('ImagemFranquiasComponent', () => {
  let component: ImagemFranquiasComponent;
  let fixture: ComponentFixture<ImagemFranquiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagemFranquiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagemFranquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
