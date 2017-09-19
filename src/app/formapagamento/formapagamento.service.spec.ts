import { TestBed, inject } from '@angular/core/testing';

import { FormapagamentoService } from './formapagamento.service';

describe('FormapagamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormapagamentoService]
    });
  });

  it('should be created', inject([FormapagamentoService], (service: FormapagamentoService) => {
    expect(service).toBeTruthy();
  }));
});
