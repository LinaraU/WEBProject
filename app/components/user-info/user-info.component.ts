import { Component, OnInit } from '@angular/core';
import { PostService} from 'src/app/services/post.service';
import { ActivatedRoute} from '@angular/router'
// import {} from 'src/app/services/post';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public posts = [];
  newPostTitle = String();
  newPostBody = String();
  constructor(private postService: PostService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  addPost(){
    const post = {
      title: this.newPostTitle,
      body: this.newPostBody
    };

    //Чекаю посты только одного юзера
    // this.postService.getPosts().subscribe(data => {
    //   this.posts = data.find(o => o.id == this.activateRoute.snapshot.params['id']);
    // });


    
    // this.postService.addPost(post as posts).subscribe(post => {
    //   console.log(post);
    //   this.posts.unshift(post);
    //   this.newPostTitle = '';
    //   this.newPostBody = '';
    // });
  }
} 