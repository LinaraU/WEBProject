import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPost():Observable<any[]>{
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts");
    // return this.http.get<any[]>("E:\Webka\Group\project\post.json");
}
}
