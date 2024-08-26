import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class AuthModule {}
