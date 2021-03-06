import { Component, OnInit } from '@angular/core';
import { PostService} from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts = [];

  deleteBtn(id){
    this.posts = this.posts.filter(o => o.id !== id);
    if (id !== -1){
      this.posts.splice(id, 1);
    }
  }
  // updatePost(){
  //   this.postService.updatePost(this.posts).subscribe((post) =>{
  //     console.log(post);
  //   });
  // }
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  this.postService.getPosts().subscribe(data => {this.posts = data; } );
  // let postUrl = encodeURI(document.location.href);
  // let postTitle = encodeURI("Hey");

  // this.facebookBtn.setAttribute(
  //   "href",
  //   `https://www.facebook.com/sharer.php?u=${postUrl}`
  // );
  }

}