import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    Page404Component,
    Page403Component,
    NavBarComponent,
    HomeComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BlogMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
