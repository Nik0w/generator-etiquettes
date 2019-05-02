import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GeneratorComponent } from './generator/generator.component';
import { UserResolver } from './core/user-resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthServiceService } from './core/auth-service.service';
import { UserService } from './core/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeneratorComponent
  ],
  imports: [
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthServiceService, UserService, AuthGuard, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
