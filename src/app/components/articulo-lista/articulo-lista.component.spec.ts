import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloListaComponent } from './articulo-lista.component';

describe('ArticuloListaComponent', () => {
  let component: ArticuloListaComponent;
  let fixture: ComponentFixture<ArticuloListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
