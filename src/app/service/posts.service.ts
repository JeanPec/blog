import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../post';
import firebase from 'firebase/app';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts : Post[] = [];
  subjectPosts = new Subject<any[]>();

  constructor() {
  }

  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts(){
    firebase.database().ref('/posts').on(
      'value', (data) => {
        this.posts = (data.val() ? data.val() : []) as Post[];
        this.emitSubject();
      });
  }

  emitSubject(){
    this.subjectPosts.next(this.posts);
  }

  addPost(post: Post){
    this.posts.push(post);
    this.savePosts();
    this.emitSubject();
  }

  removePost(indexToRemove : number){
    this.posts.splice(indexToRemove,1);
    this.savePosts();
    this.emitSubject();
  }

  incrementLike(indexToLike : number){
    this.posts[indexToLike].loveIts = this.posts[indexToLike].loveIts + 1;
    //this.savePosts();
    this.emitSubject();
  }

  decrementLike(indexToDisLike : number){
    this.posts[indexToDisLike].loveIts = this.posts[indexToDisLike].loveIts - 1;
    this.savePosts();
    this.emitSubject();
  }

}
