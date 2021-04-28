import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  BASE_URL: string;
  constructor(private http: HttpClient, handler: HttpHandler) {
    this.BASE_URL = "https://jsonplaceholder.typicode.com/posts/1/comments";
  }
  getComments(id:any):Observable<any[]>{
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts/${id}/comments");
}
}