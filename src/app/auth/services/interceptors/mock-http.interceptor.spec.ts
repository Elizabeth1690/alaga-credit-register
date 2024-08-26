import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockHttpInterceptor } from './mock-http.interceptor';

describe('MockHttpInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MockHttpInterceptor,
          multi: true,
        },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should intercept and mock /register POST requests', () => {
    const mockData = {
      email: 'test@example.com',
      nit: '12345',
      phone: '1234567890',
      password: 'password',
    };

    httpClient.post('/register', mockData).subscribe((response) => {
      expect(response).toEqual({
        message: 'Registro exitoso',
        token: 'fake-jwt-token',
      });
    });

    const req = httpMock.expectOne('/register');
    expect(req.request.method).toBe('POST');

    req.flush({ message: 'Registro exitoso', token: 'fake-jwt-token' });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
