import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Post } from '../post';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit, OnDestroy {

  @Input() postName!: string;
  @Input() postContent!: string;
  @Input() postcreatedAt!: number;
  @Input() postloveIts!: number;
  @Input() postIndex!: number;

  isAuth=false;
  appareilStatus="neutre";

  subscribePost !: Subscription;

  constructor(private postService : PostsService) {
    setTimeout(
      () =>{
        this.isAuth = true;
      }, 20
    );
   }

  ngOnInit(): void {
    this.subscribePost = this.postService.subjectPosts.subscribe(
            (value : Post[]) => {
              this.postloveIts = value[this.postIndex].loveIts;
              this.checkStatus();
            }
    )
    this.checkStatus();
  };

  ngOnDestroy(){
    this.subscribePost.unsubscribe();
  }

  checkStatus(){
    if(this.postloveIts>0)
    {
      this.appareilStatus = 'positif';
    }
    else if(this.postloveIts<0)
    {
      this.appareilStatus = 'négatif';
    } else {
      this.appareilStatus = 'neutre';
    }
  }

  clickLove(){
    this.postService.incrementLike(this.postIndex);
    
  }

  clickUnLove(){
    this.postService.decrementLike(this.postIndex);
  }

  clickSupprimer(){
    this.postService.removePost(this.postIndex);
  }


}
