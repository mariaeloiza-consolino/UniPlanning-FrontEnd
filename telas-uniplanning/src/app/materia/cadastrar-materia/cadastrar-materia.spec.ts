import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMateria } from './cadastrar-materia';

describe('CadastrarMateria', () => {
  let component: CadastrarMateria;
  let fixture: ComponentFixture<CadastrarMateria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarMateria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarMateria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
