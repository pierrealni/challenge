import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      ApiService
    ]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should return conversion data from endpoint',
    inject([ApiService], (ApiService) => {
      ApiService.getConversionData().subscribe((data) => {
        expect(data.success).toBe(true);
        expect(data['USD']).toBeDefined();
      });
    }));
});
