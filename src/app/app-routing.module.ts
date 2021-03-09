import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth/auth.guard';
import { NoAuthGuard } from './guards/noAuth/no-auth.guard';

// Components
import { PostsComponent } from './components/posts/posts/posts.component';
import { Page404Component } from './components/page404/page404.component';
import { Page403Component } from './components/page403/page403.component';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/add',
    component: AddPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '403',
    component: Page403Component
  },
  {
    path: 'albums',
    loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule),
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
