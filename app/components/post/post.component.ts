import { Component, OnInit } from '@angular/core';
import { PostService} from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts = [];
  // Dobavil
  // facebookBtn = document.querySelector(".facebook-btn");
  // twitterBtn = document.querySelector(".twitter-btn");
  // whatsappBtn = document.querySelector(".whatsapp-btn");

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  this.postService.getPost().subscribe(data => {this.posts = data;});
  
  // let postUrl = encodeURI(document.location.href);
  // let postTitle = encodeURI("Hey");

  // this.facebookBtn.setAttribute(
  //   "href",
  //   `https://www.facebook.com/sharer.php?u=${postUrl}`
  // );
  }
}
