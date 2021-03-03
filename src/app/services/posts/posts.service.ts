import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public getPosts(): Observable<any> {
    return this.httpClient.get<any>(environment.api + '/posts', this.httpOptions);
  }

  public addPost(post: any): Observable<any> {
    return this.httpClient.post<any>(environment.api + '/posts', post, this.httpOptions);
  }

}
