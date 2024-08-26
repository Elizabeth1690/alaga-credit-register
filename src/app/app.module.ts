import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockHttpInterceptor } from './auth/services/interceptors/mock-http.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
