import { Component, OnInit } from '@angular/core';
import { PostService} from 'src/app/services/post.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public posts = [];
  newPostTitle = String;
  newPostBody = String;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }
  addPost(){
    const post = {
      title: this.newPostTitle,
      body: this.newPostBody
    };

    this.postService.addPost(post as posts).subscribe(post => {
      console.log(post);
      this.posts.unshift(post);
      this.newPostTitle = '';
      this.newPostBody = '';
    });
  }
}
