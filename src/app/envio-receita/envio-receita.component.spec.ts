import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioReceitaComponent } from './envio-receita.component';

describe('EnvioReceitaComponent', () => {
  let component: EnvioReceitaComponent;
  let fixture: ComponentFixture<EnvioReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioReceitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
