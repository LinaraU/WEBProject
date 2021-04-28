import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { PostComponent } from '../post/post.component';
import { PostService} from '../../services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public post;
  public comments = [];
  id:number;
  constructor(
    private postService: PostService,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // console.log(this.activateRoute.snapshot.params['postId']);
    
  this.postService.getPosts().subscribe(data => {
    this.post = data.find(o => o.id == this.activateRoute.snapshot.params['postId']);
  });
  this.postService.getComments(this.activateRoute.snapshot.params['postId']).subscribe(data => {
    this.comments = data;})
    console.log(this.comments)
}
}