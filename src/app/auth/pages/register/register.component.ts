import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nit: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  termsAccepted: boolean = false;
  dataProcessingAccepted: boolean = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = {
      email: this.email,
      nit: this.nit,
      phone: this.phone,
      password: this.password,
    };

    this.http.post('/register', data).subscribe((response) => {
      console.log('Respuesta del servidor:', response);
    });
  }
}
