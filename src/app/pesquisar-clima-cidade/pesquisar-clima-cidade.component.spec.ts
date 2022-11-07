import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarClimaCidadeComponent } from './pesquisar-clima-cidade.component';

describe('PesquisarClimaCidadeComponent', () => {
  let component: PesquisarClimaCidadeComponent;
  let fixture: ComponentFixture<PesquisarClimaCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarClimaCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisarClimaCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
