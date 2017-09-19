import { TestBed, async, inject } from '@angular/core/testing';

import { AutenticacaoGuardGuard } from './autenticacao-guard.guard';

describe('AutenticacaoGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoGuardGuard]
    });
  });

  it('should ...', inject([AutenticacaoGuardGuard], (guard: AutenticacaoGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
