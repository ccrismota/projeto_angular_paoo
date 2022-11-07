import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPesquisaClimaComponent } from './historico-pesquisa-clima.component';

describe('HistoricoPesquisaClimaComponent', () => {
  let component: HistoricoPesquisaClimaComponent;
  let fixture: ComponentFixture<HistoricoPesquisaClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoPesquisaClimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoPesquisaClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
