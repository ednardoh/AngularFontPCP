import { TestBed } from '@angular/core/testing';

import { ColecaoDetailService } from "./colecaodetail.service";

describe('ColecaoDetailService', () => {
    let service: ColecaoDetailService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(ColecaoDetailService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });