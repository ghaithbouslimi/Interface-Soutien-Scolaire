import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './shared/user/user.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { NotfoundPageComponent } from './shared/notfound-page/notfound-page.component';
import { AngularEditorModule } from '@kolkov/angular-editor';





@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    NotfoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    NgxUploaderModule,
    AngularEditorModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
