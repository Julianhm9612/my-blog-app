import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

export function jwtTokenGetter(): any {
  return sessionStorage.getItem('access_token');
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { Page404Component } from './components/page404/page404.component';
import { Page403Component } from './components/page403/page403.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogMaterialModule } from './modules/blog-material/blog-material/blog-material.module';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptor } from './interceptors/jwt/jwt.interceptor';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    Page404Component,
    Page403Component,
    NavBarComponent,
    HomeComponent,
    AddPostComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BlogMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
