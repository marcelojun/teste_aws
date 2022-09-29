import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosMenusComponent } from './titulos-menus.component';

describe('TitulosMenusComponent', () => {
  let component: TitulosMenusComponent;
  let fixture: ComponentFixture<TitulosMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulosMenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitulosMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
