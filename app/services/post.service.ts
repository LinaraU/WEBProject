import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Posts } from './post'
// import {userInfo} from 'os';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  BASE_URL: string;
  constructor(private http: HttpClient, handler: HttpHandler) {
    // super(handler);
    this.BASE_URL = "https://jsonplaceholder.typicode.com/posts";
  }
  getPosts():Observable<any[]>{
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts");
  }
  getComments(id:any):Observable<any[]>{
    // console.log(id);
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
  // getUser(id:any):Observable<any[]>{
  //   return this.http.get<any[]>("https://jsonplaceholder.typicode.com/${id}");
  // }

  
  // deleteBtn(id: number): Observable<any> {
  //   return this.http.delete(`${this.BASE_URL}/user/${id}/`);
  // }
  // addPost(post: Posts): Observable<Posts> {
  //   return this.http.post<Posts>(`${this.BASE_URL}/user`, post);
  // }

  // updatePost(post: Posts): Observable<Posts> {
  //   return this.http.put<Posts>(`${this.BASE_URL}/albums/${userInfo().id}/`, post);
  // }
}