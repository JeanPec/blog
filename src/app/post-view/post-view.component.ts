import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit, OnDestroy {
  posts !: Post[];
  susbscriber !: Subscription;

  constructor(private postService: PostsService){
  }

  ngOnInit(): void {
    this.susbscriber = this.postService.subjectPosts.subscribe(
                              (posts : Post[]) => {
                                this.posts=posts;
                              }
                          );
    this.postService.getPosts();
    this.postService.emitSubject();
  }

  ngOnDestroy() {
    this.susbscriber.unsubscribe();
  }
}
