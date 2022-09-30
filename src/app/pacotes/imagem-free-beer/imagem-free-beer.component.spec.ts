import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemFreeBeerComponent } from './imagem-free-beer.component';

describe('ImagemFreeBeerComponent', () => {
  let component: ImagemFreeBeerComponent;
  let fixture: ComponentFixture<ImagemFreeBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagemFreeBeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagemFreeBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
